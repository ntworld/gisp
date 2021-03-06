package kr.vng.sample.service;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.vng.sample.dao.AccountDao;
import kr.vng.sample.vo.AccountVO;

@Service
public class AccountServiceImpl implements AccountService {

	@Autowired
	private AccountDao accountDao;
	
	@Override
	public AccountVO login(final String userid) throws Exception {
		return accountDao.login(userid);
	}

	@Override
	public void keepLogin(final String userid, final String sessionId, final Date next) throws Exception {
		accountDao.keepLogin(userid, sessionId, next);
	}

	@Override
	public AccountVO checkUserWithSessionKey(final String sessionId) {
		return accountDao.checkUserWithSessionKey(sessionId);
	}

	@Override
	public int register(AccountVO accountVO) {
		return accountDao.register(accountVO);
	}

}
