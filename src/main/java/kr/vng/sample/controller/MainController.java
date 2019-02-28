package kr.vng.sample.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.vng.sample.service.TestService;
import kr.vng.sample.util.Constant;
import kr.vng.sample.vo.AccountVO;
import kr.vng.sample.vo.TestVO;

/**
* 인덱스 관리 콘트롤러 클래스
* 
* @author VNG KJE
* @since 2019. 2. 21.
* 
*<pre>
* << 개정이력(Modification Information) >>
*   
*   수정일                수정자     수정내용
*  -------------- ------- ------------------
*  2019. 2. 21.   KJE      최초생성
* 
*</pre>
*/
@Controller
public class MainController extends AbstractController {

    /** testService 리소스 주입 */
    @Autowired
    private TestService testService;
    
    /**
     * 메인 페이지를 호출 한다.
     * @param
     * @return String
     * @throws Exception
     */
    @RequestMapping(value = "/mainView.do", method = {RequestMethod.GET, RequestMethod.POST})
    public String main() throws Exception {
    	
        return Constant.MAIN_PAGE;
        
    }
    
    /**
     * db 데이터 가져오기
     * @param category
     * @return List
     * @throws Exception
     */
    @ResponseBody
    @RequestMapping(value = "/selectTestList.do", method = RequestMethod.GET)
    private List<TestVO> selectTestList(@RequestParam(value="category", required = false) final String category) throws Exception{
    	
    	final TestVO vo = new TestVO();
    	vo.setCategory(category);
    	
		return testService.selectTestList(vo);
    }

	@ResponseBody
	@RequestMapping(value = "/getAccountData.do", method = RequestMethod.GET)
	private AccountVO getAccountData(@RequestParam(value = "userid") final String userid) throws Exception {
		
		return accountService.login(userid);
	}
	
}
