package kr.vng.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import kr.vng.sample.util.Constant;

@Controller
public class LoginController {
	
	@RequestMapping(value = "/loginPage.do", method = {RequestMethod.GET, RequestMethod.POST})
	public String loginPage() {
		
		return Constant.LOGIN_PAGE;
		
	}
}
