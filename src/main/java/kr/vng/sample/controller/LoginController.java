package kr.vng.sample.controller;

import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

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
public class LoginController extends AbstractController {
	
    /**
     * 로그인 페이지 호출
     */
	@RequestMapping(value = "/loginPage.do", method = RequestMethod.GET)
	public String loginPage() {
		
		return Constant.LOGIN_PAGE;
		
	}
	
    /**
     * 로그인 프로세스
     * @param userid, password, session, response, isCookie
     * @throws Exception
     */
	@RequestMapping(value = "/login.do", method = RequestMethod.GET)
	public String loginProcess(
			@RequestParam(value = "userid", required = true) final String userid,
			@RequestParam(value = "password", required = true) final String password,
			final HttpSession session,
			final HttpServletResponse response, 
			final AccountVO isCookie) throws Exception {

		// Url
		String returnUrl = Constant.REDIRECT_MAIN_PAGE;
		
		// 사용자 정보
		final AccountVO accountVO = accountService.loginInfo(userid);
		
		Optional.ofNullable(session.getAttribute("login")) // 세션에 login이 존재할 경우 삭제
			.ifPresent(removeSession -> session.removeAttribute("login"));
		
		Optional.ofNullable(accountVO.getUserid()) // 로그인이 안됐을 경우 
			.orElse(returnUrl = Constant.REDIRECT_LOGIN_PAGE);
		
		Optional.of(password.equals(accountVO.getPassword())) // 로그인 성공 후 쿠기생성
			.ifPresent(setCookie -> setCookie(session, response, isCookie, userid));
				
		return returnUrl;
	}
	
    /**
     * 로그아웃
     * @param session
     */
	@RequestMapping(value = "/logout.do")
	public String logout(final HttpSession session) {
		
		session.invalidate();
		
		return Constant.REDIRECT_LOGIN_PAGE;
	}
	
    /**
     * 쿠키세팅
     * @param userId, session, response, isCookie
     */
	private void setCookie(final HttpSession session, final HttpServletResponse response, final AccountVO isCookie, final String userid) {
		
		session.setAttribute("login", userid);
		
		if(isCookie.isUseCookie()) {
			final Cookie cookie = new Cookie("loginCookie", session.getId());
			
			cookie.setPath("/");
			cookie.setMaxAge(Constant.COOKIE_AMOUNT);
			
			response.addCookie(cookie);
		} 
	}
}
