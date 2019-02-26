package kr.vng.sample.controller;

import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.vng.sample.service.AccountService;
import kr.vng.sample.util.Constant;
import kr.vng.sample.vo.AccountVO;

/**
* 계정 컨트롤러
* 
* @author VNG KJE
* @since 2019. 2. 21.
* 
*<pre>
*
*   수정일                수정자     수정내용
*  -------------- ------- ------------------
*  2019. 2. 21.   KJE      최초생성
*  
*</pre>
*/
@Controller
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	@RequestMapping(value = "/loginPage.do", method = RequestMethod.GET)
	public String loginPage() {
		
		return Constant.LOGIN_PAGE;
		
	}
	
	@RequestMapping(value = "/register.do", method = {RequestMethod.GET, RequestMethod.POST})
	public String register() {
		
		return "";
		
	}
	
	@RequestMapping(value = "/login.do", method = RequestMethod.GET)
	public String loginProcess(
			@RequestParam(value = "userId", required = true) final String userId,
			@RequestParam(value = "password", required = true) final String password,
			final HttpSession session,
			final HttpServletResponse response, 
			final AccountVO isCookie) throws Exception {

		// Url
		String returnUrl = Constant.REDIRECT + Constant.MAIN_PAGE;
		
		// 사용자 정보
		final AccountVO accountVO = accountService.loginInfo(userId);
		
		Optional.ofNullable(session.getAttribute("login")) // 세션에 login이 존재할 경우 삭제
			.ifPresent(removeSession -> session.removeAttribute("login"));
		
		Optional.ofNullable(accountVO.getId()) // 로그인이 안됐을 경우 
			.orElse(returnUrl = Constant.REDIRECT + Constant.LOGIN_PAGE);
		
		Optional.ofNullable(password.equals(accountVO.getPassword())) // 로그인 성공 후 쿠기생성
			.ifPresent(setCookie -> setCookie(session, response, isCookie, userId));
				
		return returnUrl;
	}
	
	private void setCookie(final HttpSession session, final HttpServletResponse response, final AccountVO isCookie, final String userId) {
		
		session.setAttribute("login", userId);
		
		if(isCookie.isUseCookie()) {
			final Cookie cookie = new Cookie("loginCookie", session.getId());
			
			cookie.setPath("/");
			cookie.setMaxAge(Constant.COOKIE_AMOUNT);
			
			response.addCookie(cookie);
		} 
	}
}
