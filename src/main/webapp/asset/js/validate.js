/*******************************************
파일명 : validate.js
설  명 : 유효성 검사 Function

수정일           수정자        Version     설명
-----------  --------   --------   --------------
2017.05.15   YSH         1.0          최초 생성
********************************************/

/**
* 특수문자 유효성 체크
* @param str 문자열
* @return boolean
*/
function checkSpecialLetters(str) {
	var chktext = /[\{\}\[\]\/?.,;:|\)*~`!^\_+┼<>@\#$%&\'\"\\\(\=]/gi;
	if (chktext.test(str)) {
		alert("특수문자는 입력하실 수 없습니다.");
		return false;
	}
	return true;
}
	
/**
* 비밀번호 유효성체크(영문, 숫자, 특수문자 포함 {cnt} 이상, {target} 문자열 포함여부 체크)
* @param str 문자열
* @param target 비교문자열
* @param cnt 자리수
* @return boolean
*/
function checkPassword(str, target, cnt) {

	var pw = str;
	var num = pw.search(/[0-9]/g);
	var eng = pw.search(/[a-z]/ig);
	var spe = pw.search(/([a-zA-Z].*[0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([a-zA-Z].*[!,@,#,$,%,^,&,*,?,_,~].*[0-9])|([0-9].*[a-zA-Z].*[!,@,#,$,%,^,&,*,?,_,~])|([0-9].*[!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z])|([!,@,#,$,%,^,&,*,?,_,~].*[0-9].*[a-zA-Z])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z].*[0-9])/);
	

	if(pw.length < cnt) {
		alert("비밀번호는 " + cnt + "자리이상 입력해 주세요");
		return false;
	}

	if(pw.search(/₩s/) != -1) {
		alert("비밀번호는 공백업이 입력해주세요.");
		return false;
	}
	
	if(num < 0 || eng < 0 || spe < 0 ) {
		alert("비밀번호는 영문,숫자, 특수문자를 혼합하여 입력해주세요.");
		return false;
	}
	
	var maxCnt = 4;
	var isValid = true;
	
	//동일문자 4회이상 입력 불가
	for(var i = 0; i <= str.length - maxCnt; i++) {
		var duplicateCnt = 0;

		for(var j = 0; j < maxCnt; j++) {
			duplicateCnt += Number(str.charAt(i).equals(str.charAt(i + j)));
		};

		if(duplicateCnt == maxCnt) {
			isValid  = 'DUPLICATE'; 
			break; 
		};
	};
	
	if(str.isContinuous(maxCnt)) {
		isValid = 'CONTINUOUS';
	}
	else if(str.contains(target)) {
		isValid = 'CONTAIN_ID';
	}
	
	if(isValid == "DUPLICATE") {
		alert("비밀번호는 동일문자를 4번 이상 연속으로 사용할 수 없습니다.");
		return false;
	}
	else if(isValid == "CONTINUOUS") {
		alert("비밀번호는 문자열(123 또는 abc 등)을 4자 이상 사용 할 수 없습니다.");
		return false;
	}
	else if(isValid == "CONTAIN_ID") {
		alert("비밀번호는 아이디를 사용할 수 없습니다.");
		return false;
	}
	return true;
}

/**
* 이메일 유효성 체크
* @param emailAddr 이메일주소
* @return boolean
*/
function validateEmail(emailAddr) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(emailAddr);
}


