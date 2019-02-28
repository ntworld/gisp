package kr.vng.sample.controller;

import java.sql.Date;
import java.util.Objects;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.WebUtils;

import kr.vng.sample.util.Constant;
import kr.vng.sample.vo.AccountVO;

/**
 * 계정 컨트롤러
 * 
 * @author VNG KJE
 * @since 2019. 2. 21.
 * 
 *        <pre>
*
*   수정일                수정자     수정내용
*  -------------- ------- ------------------
*  2019. 2. 21.   KJE      최초생성
 * 
 *        </pre>
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
     * @param session, response, isCookie
     * @throws Exception
     */
	@RequestMapping(value = "/loginProcess.do", method = RequestMethod.POST)
	public String loginProcess(
			final HttpSession session,
			final HttpServletResponse response, 
			final AccountVO isCookie) throws Exception {

		// Url
		String returnUrl = Constant.REDIRECT_MAIN_PAGE;
		
		// 사용자 정보
		final AccountVO accountVO = accountService.login(isCookie.getUserid());
		
		if (Objects.nonNull(session.getAttribute(Constant.LOGIN)))
			session.removeAttribute(Constant.LOGIN);
		
		if (Objects.nonNull(accountVO.getUserid()) && StringUtils.equals(isCookie.getPassword(), accountVO.getPassword())) {
			
			setCookie(session, response, isCookie, accountVO);
			
		} else {
			
			returnUrl = Constant.REDIRECT_LOGIN_PAGE;
		}
		
		return returnUrl;
	}

	/**
	 * 로그아웃
	 * @param session, response, request
	 * @throws Exception
	 */
	@RequestMapping(value = "/logout.do")
	public String logout(final HttpSession session, final HttpServletResponse response,
			final HttpServletRequest request) throws Exception {

		final Object obj = session.getAttribute(Constant.LOGIN);

		if (Objects.nonNull(obj)) {

			// null이 아닐 경우 제거
			session.removeAttribute(Constant.LOGIN);
			session.invalidate(); // 세션 전체를 날려버림

			// 쿠키를 가져옴
			final Cookie loginCookie = WebUtils.getCookie(request, Constant.LOGIN_COOKIE);

			if (Objects.nonNull(loginCookie)) {

				loginCookie.setPath("/");
				loginCookie.setMaxAge(0);
				response.addCookie(loginCookie);

				// 사용자 테이블에서도 유효기간을 현재시간으로 다시 세팅해줘야함.
				accountService.keepLogin((String) obj, session.getId(), new Date(System.currentTimeMillis()));
			}
		}
		return Constant.REDIRECT_LOGIN_PAGE;
	}

	/**
	 * 쿠키세팅
	 * @param userId, session, response, isCookie, accountVO
	 */
	private void setCookie(final HttpSession session, final HttpServletResponse response, final AccountVO isCookie, final AccountVO accountVO) {

		session.setAttribute(Constant.LOGIN, isCookie.getUserid());

		if (isCookie.isUseCookie()) {
			final Cookie cookie = new Cookie(Constant.LOGIN_COOKIE, session.getId());

			cookie.setPath("/");
			cookie.setMaxAge(Constant.COOKIE_AMOUNT);

			response.addCookie(cookie);

			// 현재 세션 id와 유효시간을 사용자 테이블에 저장한다.
			try {
				accountService.keepLogin(accountVO.getUserid(), session.getId(),
						new Date(System.currentTimeMillis() + (1000 * Constant.COOKIE_AMOUNT)));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
}
