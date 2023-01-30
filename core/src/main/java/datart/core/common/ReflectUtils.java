package datart.core.common;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

public class ReflectUtils {

    public static Field getDeclaredField(Class<?> clz, String name) {
        Field field = null;
        while (clz != null && field == null) {
            try {
                field = clz.getDeclaredField(name);
            } catch (NoSuchFieldException e) {
                clz = clz.getSuperclass();
            }
        }
        return field;
    }


    public static <T> T getFieldValue(Object o, String name) {
        boolean isClass = o instanceof Class;
        Field field;
        if (isClass) {
            field = getDeclaredField((Class<?>) o, name);
        } else {
            field = getDeclaredField(o.getClass(), name);
        }
        if (field != null) {
            try {
                field.setAccessible(true);
                return (T) field.get(isClass ? null : o);
            } catch (IllegalAccessException e) {
                return null;
            }
        } else return null;
    }


    public static void setFiledValue(Object o, String filedName, Object value) throws IllegalAccessException {
        Field field = getDeclaredField(o.getClass(), filedName);
        if (field != null) {
            field.setAccessible(true);
            field.set(o, value);
        }
    }


    public static Map<Field, Object> getNotNullFields(Object o) {
        Map<Field, Object> fieldMap = new HashMap<>();
        Class<?> clz = o.getClass();
        while (clz != null) {
            Field[] fields = clz.getDeclaredFields();
            try {
                for (Field field : fields) {
                    field.setAccessible(true);
                    Object v = field.get(o);
                    if (v != null) {
                        fieldMap.put(field, v);
                    }
                }
            } catch (IllegalAccessException ignored) {
            }
            clz = clz.getSuperclass();
        }
        return fieldMap;
    }

}
