package datart.server.config.interceptor;

import datart.core.base.annotations.SkipLogin;
import datart.core.base.consts.Const;
import datart.core.base.exception.Exceptions;
import datart.core.common.RequestContext;
import datart.security.exception.AuthException;
import datart.security.manager.DatartSecurityManager;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class LoginInterceptor implements HandlerInterceptor {

    private final DatartSecurityManager securityManager;


    public LoginInterceptor(DatartSecurityManager securityManager) {
        this.securityManager = securityManager;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (!(handler instanceof HandlerMethod)) {
            return true;
        }
        Exception loginException = null;
        String token = request.getHeader(Const.TOKEN);
        if (token != null) {
            try {
                token = securityManager.login(token);
                response.setHeader(Const.TOKEN, token);
                return securityManager.isAuthenticated();
            } catch (Exception e) {
                loginException = e;
            }
        }
        HandlerMethod handlerMethod = (HandlerMethod) handler;
        if (handlerMethod.getMethodAnnotation(SkipLogin.class) != null) {
            return true;
        }
        if (loginException != null) {
            throw loginException;
        }
        Exceptions.tr(AuthException.class, "login.not-login");
        return false;
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        securityManager.logoutCurrent();
        RequestContext.clean();
    }
}
