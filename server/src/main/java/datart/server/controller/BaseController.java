package datart.server.controller;

import datart.core.base.exception.Exceptions;
import datart.core.base.exception.ParamException;
import datart.core.common.MessageResolver;
import datart.core.entity.User;
import datart.security.manager.DatartSecurityManager;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

public class BaseController  extends MessageResolver {


    protected DatartSecurityManager securityManager;

    @Autowired
    public void setSecurityManager(DatartSecurityManager securityManager) {
        this.securityManager = securityManager;
    }

    protected User getCurrentUser() {
        return securityManager.getCurrentUser();
    }

    public void checkBlank(String param, String paramName) {
        if (StringUtils.isBlank(param)) {
            Exceptions.tr(ParamException.class, "error.param.empty", paramName);
        }
    }


}
