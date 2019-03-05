package kr.vng.sample.util;

public class Constant {
	
	public static final String MAIN_PAGE = "mainView";
	public static final String LOGIN_PAGE = "loginPage";
	
	public static final String REDIRECT_LOGIN_PAGE = "redirect:/loginPage.do";
	public static final String REDIRECT_MAIN_PAGE = "redirect:/mainView.do";
	
	public static final String LOGIN = "login";
	public static final String LOGIN_COOKIE = "loginCookie";
	
	public static final String SEND_REDIRECT_LOGIN_PAGE = "/loginPage.do";
	public static final String SEND_REDIRECT_MAIN_PAGE = "/mainView.do";
	
	public static final int COOKIE_AMOUNT = 60 * 60 * 24 * 7;
	
	public static interface AccountMapper {
		
		final String LOGIN = "accountMapper.login";
		final String KEEP_LOGIN = "accountMapper.keepLogin";
		final String CHECK_USER_WITH_SESSIION_KEY = "accountMapper.checkUserWithSessionKey";
		final String REGISTER = "accountMapper.register";
		
	}
	
	public static interface Test {
		
		final String SELECT_TEST_LIST = "test.selectTestList";
		
	}
	
}
