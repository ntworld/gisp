package kr.vng.sample.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.vng.sample.vo.TestVO;

@Repository
public class TestDaoImpl implements TestDao {

	@Autowired
	private SqlSession sqlSession;
	
	public List<TestVO> selectTestList(final TestVO category) {
		return sqlSession.selectList("accountMapper.selectTestList", category);
	}
}