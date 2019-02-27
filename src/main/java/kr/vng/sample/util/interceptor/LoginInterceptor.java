package kr.vng.sample.util.interceptor;

import java.util.Objects;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.util.WebUtils;

import kr.vng.sample.service.AccountService;
import kr.vng.sample.util.Constant;
import kr.vng.sample.vo.AccountVO;

public class LoginInterceptor extends HandlerInterceptorAdapter {

	@Autowired
	private AccountService accountService;
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		final HttpSession session = request.getSession();
		
		final Object obj = session.getAttribute(Constant.LOGIN);
		
		if (Objects.isNull(obj)) {
			
			final Cookie loginCookie = WebUtils.getCookie(request, Constant.LOGIN_COOKIE);
			
			if (Objects.nonNull(loginCookie)) {
				
				final String sessionId = loginCookie.getValue();
				final AccountVO accountVO = accountService.checkUserWithSessionKey(sessionId);
				
				if (Objects.nonNull(accountVO)) {
					
					session.setAttribute(Constant.LOGIN, accountVO);
					return true;
				}
			}
			
			response.sendRedirect(Constant.SEND_REDIRECT_LOGIN_PAGE);
			return false;
		}
		
		return true;
	}
	
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		super.postHandle(request, response, handler, modelAndView);
	}
}
