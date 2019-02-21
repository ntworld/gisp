/*******************************************
파일명 : commonMessage.js
설  명 : 공통 메세지 Function

수정일           수정자        Version     설명
-----------  --------   --------   --------------
2017.05.15   YSH         1.0          최초 생성
********************************************/

/**
* 시스템 메세지 정의
* @param String
* @return String
*/
function setClientMsg(code) {
    var str = "";
    switch (code) {
        case "confirm.save":
            str = "저장 하시겠습니까?";
            break;
        case "confirm.delete":
            str = "삭제 하시겠습니까?";
            break;
        case "confirm.update":
            str = "수정 하시겠습니까?";
            break;
            
        case "success.save":
            str = "정상적으로 등록 되었습니다.";
            break;
        case "success.update":
            str = "정상적으로 수정 되었습니다.";
            break;
        case "success.delete":
            str = "정상적으로 삭제 되었습니다.";
            break;
            
        case "fail.save":
            str = "저장에 실패 하였습니다.";
            break;
        case "fail.update":
            str = "수정에 실패 하였습니다.";
            break;
        case "fail.delete":
            str = "삭제에 실패 하였습니다.";
            break;
        case "fail.request":
            str = "요청에 실패 하였습니다.";
            break;
        case "fail.nodata":
            str = "검색된 자료가 없습니다. 다른 검색조건을 선택해 주세요.";
            break;
        case "fail.required":
            str = "(은)는 필수 입력 항목 입니다.";
            break;
            
        default:
            str = "시스템 준비중 입니다.";
            break;
        }
        return str;
}

