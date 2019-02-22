package kr.vng.sample.controller;

import java.util.Objects;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
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
	
	@RequestMapping(value = "/loginPage.do", method = {RequestMethod.GET, RequestMethod.POST})
	public String loginPage() {
		
		return Constant.LOGIN_PAGE;
		
	}
	
	@RequestMapping(value = "/register.do", method = {RequestMethod.GET, RequestMethod.POST})
	public String register() {
		
		return "";
		
	}
	
	@RequestMapping(value = "/login.do", method = {RequestMethod.GET, RequestMethod.POST})
	public String loginProcess(
			@RequestParam(value = "userId", required = true) final String userId,
			@RequestParam(value = "password", required = true) final String password,
			final HttpSession session, 
			final HttpServletResponse response,
			final AccountVO isCookie) throws Exception {
		
		if(Objects.nonNull(session.getAttribute("login"))) 
			session.removeAttribute("login");
		
		final AccountVO accountVO = accountService.loginInfo(userId);
		
		if(Objects.nonNull(accountVO) && StringUtils.equals(accountVO.getPassword(), password)) {
			
			session.setAttribute("login", accountVO);
			
			if(isCookie.isUseCookie()) {
				final Cookie cookie = new Cookie("loginCookie", session.getId());
				
				cookie.setPath("/");
				cookie.setMaxAge(Constant.COOKIE_AMOUNT);
				
			}
			
		}
		
		
		return "";
	}
	
}
