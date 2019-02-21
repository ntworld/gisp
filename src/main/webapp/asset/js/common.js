/*******************************************
파일명 : common.js
설  명 : 공통 JavaScript Function

수정일           수정자        Version     설명
-----------  --------   --------   --------------
2017.05.15   YSH         1.0          최초 생성
********************************************/


// ##################
// SYSTEM Function
// ##################

/**
* Ajax 호출
* @param object
* @return callback
*/
function callAjax(o) {

    $.ajax({
        type : nvl(o.type, "GET")
        , url : o.url
        , data : o.param
        , dataType : nvl(o.dataType, "json")
        , cache : false
        , contentType : o.contentType == undefined ? "application/x-www-form-urlencoded; charset=UTF-8" : o.contentType
        , timeout : 15000
        , async : o.async == undefined ? true : o.async               
        , complete: function(data) {
            o.callback(data); 
        }
        , error : nvl(o.errCallback, commonErrCallback)
    });

}

/**
* Ajax Form Submit
* @param object
* @return callback
*/
function callAjaxForm(o) {

    $("#" + o.formName).ajaxSubmit({
        type : nvl(o.type, "GET")
        , url : o.url
        , data : $(this).serialize()
        , dataType : nvl(o.dataType, "json")
        , cache : false
        , contentType : o.contentType == undefined ? "application/x-www-form-urlencoded; charset=UTF-8" : o.contentType
        , timeout : 15000
        , async : o.async == undefined ? true : o.async
        , complete: function(data) {
            o.callback(data);  
        }
        , error : nvl(o.errCallback, commonErrCallback)
    });

}

/**
* Ajax 에러 공통 Callback Function
* @param object
* @return callback
*/
function commonErrCallback(err) {
    if(err.statusText === "timeout") {
        alert(setClientMsg("fail.request"));
        location.reload(true);  
    } else {
        
    }
}

/**
* Jquery Ajax File Download (동적으로 폼을 생성하여 파일 다운로드) overrid
* @param url, data, method
* @return 
* @ex. jQuery.download('testExcelDownload.do','find=commoncode','post' );
*/
jQuery.download = function(url, data, method){
    // url과 data를 입력받음
    if( url && data ) { 
        // data 는  string 또는 array/object 를 파라미터로 받는다.
        data = typeof data == 'string' ? data : jQuery.param(data);
        // 파라미터를 form의  input으로 만든다.
        var inputs = '';
        jQuery.each(data.split('&'), function(){ 
            var pair = this.split('=');
            inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />'; 
        });
        // request를 보낸다.
        jQuery('<form action="'+ url +'" method="'+ (method||'post') +'">'+inputs+'</form>').appendTo('body').submit().remove();
    };
};

/**
* 윈도우 팝업.
* @param pUrl, pName, pWidth, pHeight 
* @return
*/
function popUp(pUrl, pName, pWidth, pHeight) {
    var x = (screen.availWidth - pWidth) / 2;
    var y = (screen.availHeight - pHeight) / 2;
    window.open(pUrl, pName, 'width='+pWidth+', height='+pHeight+', left='+x+', top='+y+', menubar=no, toolbar=no, location=no, directories=no, status=no, scrollbars=no, resizable=no');
}

//##################
//문자형 Function
//##################

/**
* 공백제거
* @param String
* @return String
*/
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g,"");
};

/**
* 문자열 치환
* @param 대상문자열, 치환문자열
* @return String
*/
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
};

//##################
//숫자형 Function
//##################

/**
* 1자리 숫자 앞에 0 삽입(날짜, 시간등)
* @param 값
* @return String
*/
function addZeroFrontOfNum(val) {
    return ("0" + (val)).slice(-2); 
}

/**
* 소수점 분리하여 정수와 소수를 반환
* @param val 값
* @return String
*/
function splitDecimalPoint(val) {

    var tmpVal = {};
    var reg = /^[-|+]?\d+$/;
    
    if(reg.test(val)){
        tmpVal.int = val;
        tmpVal.decimal = "0";
    } else {
        val = val.toString();
        tmpVal.int = val.split(".")[0];
        tmpVal.decimal = val.split(".")[1];
    }
    return tmpVal;
    
}

/**
* 단위만큼 소수점 버림
* @param 값, 자리수
* @return String
*/
function floorDecimal(val, unit) {
    var tmpVal = val * Math.pow(10, unit);
    tmpVal = Math.floor(tmpVal);
    if(unit != 0){
        tmpVal = tmpVal / 10;   
    }
    return tmpVal;
}

/**
* 단위만큼 소수점 반올림
* @param 값
* @return Number
* @ex. (45.5547).roundintPoint(1) = 45.6
*/
if(typeof Number.prototype.roundingPoint !== 'function') {
    Number.prototype.roundingPoint = function(num){
        if(this == 0){
            return 0;
        };
        
        var point = '1';
        for(var i=0; i<num; i++){
            point += '0';
        }
        var n = Math.round(this*Number(point))/Number(point).toFixed(1);

        return n;
    };
}

/**
* 천단위 숫자 콤마 삽입
* @param 값
* @return Number
*/
if(typeof Number.prototype.numberFormat !== 'function') {
    Number.prototype.numberFormat = function(num) {
        
        if(isNaN(this) == true) {
            return 0;
        }
        
        if(this == 0){
            return 0;
        };

        var reg = /(^[+-]?\d+)(\d{3})/;
        var n = (this + '');

        while(reg.test(n)) {
            n = n.replace(reg, '$1' + ',' + '$2');
        };

        return n; 
    };
};

//##################
//날짜형 Function
//##################

/**
* 시작날짜와 종료날짜를 지정
* @param 날짜
* @return String
*/
function getStrDateEndDate(strInterval, endInterval) {
    
    var date = new Date();

    date.setDate(date.getDate() + strInterval);
    var strDate = new Date(date);
    
    date.setDate(date.getDate() + endInterval);
    var endDate = new Date(date);
    
    return {
        strDate : strDate,
        endDate:  endDate
    };
    
}

//##################
//객체, 변수 비교 Function
//##################

/**
* target 문자열이 null이면 대체문자열로 치환
* @param target, replace
* @returns {String}
*/
function nvl(target, replace) {
    var str = "";
    try {
        // target문자열 앞뒤 공백제거
        var strr = $.trim(target);
        // null이면 대체문자열로 retun
        if (!strr || strr == null || strr == "" || strr == "null" || strr == "undefined" || strr == undefined || strr == "") {
            str = replace;
        }
        // 아닌 경우 원래문자열 return
        else {
            str = target;
        }
    } catch (err) {
        str = replace;
    }
    return str;
}

/**
* Null 체크 함수
* @param argument
* @returns boolean
*/
function isNull(arg) {
    var regExp = /(^\s*)|(\s*$)/;
    if("string".equalsType(arg)) {
        arg = arg.replace(regExp, '');
    };
    return arg === null || arg === undefined || arg === '';
}

/**
 * 문자 타입비교 함수
 * @param object
 * @return boolean
 */
if(typeof String.prototype.equalsType !== 'function') {
    String.prototype.equalsType = function(obj) {
        return this.toString() === typeof obj;
    };
};

/**
 * 동일한 문자열 비교
 * @param String
 * @return boolean
 */
if(typeof String.prototype.equals !== 'function') {
    String.prototype.equals = function(str) {
        return this.toString() === str;
    };
}

/**
 * 문자열 포험여부 확인
 * @param String
 * @return boolean
 */
if(typeof String.prototype.contains !== 'function') {
    String.prototype.contains = function(str) {
        return this.indexOf(str) > -1;
    };
}

/**
 * 연속된 문자열이 있는지 확인
 * @param number
 * @return boolean
 */
if(typeof String.prototype.isContinuous !== 'function') {
    String.prototype.isContinuous = function(maxCnt) {
        var str = this.toString();
        var isContinuous = false;
        for(var i = 0; i <= str.length - maxCnt; i++) {
            var cnt = 0;
            for(var j = 0; j < maxCnt - 1; j++) {
                cnt += Number(Math.abs(str.charCodeAt(i + j + 1) - str.charCodeAt(i + j)) == 1);
            };
            if(cnt == maxCnt - 1){isContinuous = true; break;};
        };
        return isContinuous;
    };
}

