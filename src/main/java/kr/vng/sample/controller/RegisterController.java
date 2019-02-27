package kr.vng.sample.controller;

import java.sql.SQLException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import kr.vng.sample.util.Constant;
import kr.vng.sample.vo.AccountVO;

@Controller
public class RegisterController extends AbstractController {
	
    /**
     * 유저 등록
     * @param accountVO
     * @exception SQLException
     */
	@RequestMapping(value = "/register.do", method = RequestMethod.POST)
	public String register(final AccountVO accountVO) throws SQLException {
		
		accountService.insertAccount(accountVO);
		
		return Constant.REDIRECT_LOGIN_PAGE;
	}
}
