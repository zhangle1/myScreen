package datart.server.base.params;

import datart.core.base.consts.Const;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Data
@NotNull
public class ChangeUserPasswordParam {

    @NotBlank(message = "Enter your old password")
    private String oldPassword;

    @NotBlank(message = "Password cant't be empty")
    @Pattern(regexp = Const.REG_USER_PASSWORD, message = "Password length should be 6-20 characters")
    private String newPassword;

}
