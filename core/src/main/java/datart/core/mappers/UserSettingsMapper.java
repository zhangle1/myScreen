package datart.core.mappers;

import datart.core.entity.UserSettings;
import datart.core.mappers.ext.CRUDMapper;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

public interface UserSettingsMapper extends CRUDMapper {
    @Delete({
        "delete from user_settings",
        "where id = #{id,jdbcType=VARCHAR}"
    })
    int deleteByPrimaryKey(String id);

    @Insert({
        "insert into user_settings (id, user_id, ",
        "rel_type, rel_id, ",
        "config)",
        "values (#{id,jdbcType=VARCHAR}, #{userId,jdbcType=VARCHAR}, ",
        "#{relType,jdbcType=VARCHAR}, #{relId,jdbcType=VARCHAR}, ",
        "#{config,jdbcType=VARCHAR})"
    })
    int insert(UserSettings record);

    @InsertProvider(type=UserSettingsSqlProvider.class, method="insertSelective")
    int insertSelective(UserSettings record);

    @Select({
        "select",
        "id, user_id, rel_type, rel_id, config",
        "from user_settings",
        "where id = #{id,jdbcType=VARCHAR}"
    })
    @Results({
        @Result(column="id", property="id", jdbcType=JdbcType.VARCHAR, id=true),
        @Result(column="user_id", property="userId", jdbcType=JdbcType.VARCHAR),
        @Result(column="rel_type", property="relType", jdbcType=JdbcType.VARCHAR),
        @Result(column="rel_id", property="relId", jdbcType=JdbcType.VARCHAR),
        @Result(column="config", property="config", jdbcType=JdbcType.VARCHAR)
    })
    UserSettings selectByPrimaryKey(String id);

    @UpdateProvider(type=UserSettingsSqlProvider.class, method="updateByPrimaryKeySelective")
    int updateByPrimaryKeySelective(UserSettings record);

    @Update({
        "update user_settings",
        "set user_id = #{userId,jdbcType=VARCHAR},",
          "rel_type = #{relType,jdbcType=VARCHAR},",
          "rel_id = #{relId,jdbcType=VARCHAR},",
          "config = #{config,jdbcType=VARCHAR}",
        "where id = #{id,jdbcType=VARCHAR}"
    })
    int updateByPrimaryKey(UserSettings record);
}