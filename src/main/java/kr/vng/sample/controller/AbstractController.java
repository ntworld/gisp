package kr.vng.sample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import kr.vng.sample.service.AccountService;

@Controller
public class AbstractController {
	
	@Autowired
	protected AccountService accountService;
}
