package datart.core.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class MessageResolver {

    private static MessageSource messageSource;

    public MessageResolver() {
    }


    @Autowired
    public void setMessageSource(MessageSource messageSource){
        MessageResolver.messageSource = messageSource;
    }

    public static String getMessage(Object code) {
        return messageSource.getMessage(code.toString(), null, code.toString(), LocaleContextHolder.getLocale());
    }

    public static String getMessages(Object code, Object... messageCodes) {
        Object[] objs = Arrays.stream(messageCodes).map(MessageResolver::getMessage).toArray();
        return messageSource.getMessage(code.toString(), objs, code.toString(), LocaleContextHolder.getLocale());
//        return getMessage(code, objs);
    }


}
