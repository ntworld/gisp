package kr.vng.sample.dao;

import java.util.List;

import kr.vng.sample.vo.TestVO;

public interface TestDao {
	
	public List<TestVO> selectTestList(final TestVO category) throws Exception;
	
}
