package kr.vng.sample.dao;

import java.sql.Date;

import kr.vng.sample.vo.AccountVO;

public interface AccountDao {

    /**
     * 로그인에 필요한 정보 호출
     * @return List<AccountVO>
     * @throws Exception
     */
	public AccountVO loginInfo(final String userId) throws Exception;
	
    /**
     * 로그인 유지에 필요한 정보 호출
     * @param id, sessionId, next
     * @throws Exception
     */
	public void keepLogin(final String id, final String sessionId, final Date next) throws Exception;
	
    /**
     * 유저 세션체크 
     * @param sessionId
     * @return AccountVO
     * @throws Exception
     */
	public AccountVO checkUserWithSessionKey(final String sessionId);

}
