package kr.vng.sample.service;

import java.sql.Date;

import kr.vng.sample.vo.AccountVO;

public interface AccountService {

    /**
     * 로그인에 필요한 정보 호출
     * @return AccountVO
     * @throws Exception
     */
	public AccountVO login(final String userid) throws Exception;
	
    /**
     * 로그인 유지에 필요한 정보 호출
     * @param userid, sessionId, next
     * @throws Exception
     */
	public void keepLogin(final String userid, final String sessionId, final Date next) throws Exception;
	
    /**
     * 유저 세션체크 
     * @param sessionId
     * @return AccountVO
     * @throws Exception
     */
	public AccountVO checkUserWithSessionKey(final String sessionId);
	
    /**
     * 유저 등록 
     * @param accountVO
     * @throws Exception
     */
	public int register(final AccountVO accountVO);
	
}
