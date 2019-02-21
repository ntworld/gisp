package kr.vng.sample.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.vng.sample.dao.TestDao;
import kr.vng.sample.vo.TestVO;

@Service
public class TestServiceImpl implements TestService {
	
	@Autowired
	private TestDao testDAO;
	
	@Override
	public List<TestVO> selectTestList(final TestVO category) throws Exception {
		return testDAO.selectTestList(category);
	}

}
