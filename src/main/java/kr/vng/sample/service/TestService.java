package kr.vng.sample.service;

import java.util.List;

import kr.vng.sample.vo.TestVO;

public interface TestService {

	public List<TestVO> selectTestList(final TestVO category) throws Exception;

}
