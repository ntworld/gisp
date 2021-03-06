package kr.vng.sample.dao;

import java.sql.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.vng.sample.util.Constant;
import kr.vng.sample.vo.AccountVO;

@Repository
public class AccountDaoImpl implements AccountDao {

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public AccountVO login(final String userid) throws Exception {	
		return sqlSession.selectOne(Constant.AccountMapper.LOGIN, userid);
	}

	@Override
	public void keepLogin(final String userid, final String sessionId, final Date next) throws Exception {
		
        final Map<String, Object> map = new HashMap<String,Object>();
        map.put("userid", userid);
        map.put("sessionId", sessionId);
        map.put("next", next);
         
        // 아래가 수행되면서, 사용자 테이블에 세션id와 유효시간이 저장됨
        sqlSession.update(Constant.AccountMapper.KEEP_LOGIN, map);
	}

	@Override
	public AccountVO checkUserWithSessionKey(final String sessionId) {
		
		// 유효시간이 남아있고(>now()) 전달받은 세션 id와 일치하는 사용자 정보를 꺼낸다.
        return sqlSession.selectOne(Constant.AccountMapper.CHECK_USER_WITH_SESSIION_KEY, sessionId);
	}

	@Override
	public int register(AccountVO accountVO) {
		return sqlSession.insert(Constant.AccountMapper.REGISTER, accountVO);
	}

}
