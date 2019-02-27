<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:directive.include file="/WEB-INF/view/__system/taglibs.jsp"/>    
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title> V&amp;G </title>
	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	
	<style>
		body.mbbody{background:none}
		a{
		    display: inline-block;
		    font-family: 'Dotum', sans-serif;
		    font-size: 12px;
		    vertical-align: middle;
		    text-decoration: none;
		}
		p{
		    margin: 0;
		    padding: 0;
		    border: 0;
		    font-family: inherit;
		}
		a.btn_st2{
			height:29px;line-height:29px;color:#fff;font-weight:bold;padding:0 8px;border:1px solid #676f7f;border-radius:3px;
			box-shadow:1px 1px 3px rgba(0,0,0,.50);
			background: #56a5da; /* For browsers that do not support gradients */
			background: -webkit-linear-gradient(top, #56a5da , #4b94c6); /* For Safari 5.1 to 6.0 */
			background: -o-linear-gradient(top, #56a5da, #4b94c6); /* For Opera 11.1 to 12.0 */
			background: -moz-linear-gradient(top, #56a5da, #4b94c6); /* For Firefox 3.6 to 15 */
			background: linear-gradient(to bottom, #56a5da , #4b94c6); /* Standard syntax */
			box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;
		}
		.btn_center{clear:both;text-align:center}
		.error{position:absolute;top:50%;left:50%;width:630px;height:305px;margin:-235px 0 0 -315px;padding-top:165px;background:url(/asset/images/img_error.png) no-repeat center top}
		.error .svcmt1{font-size:35px;color:#56a5da;letter-spacing:-1px;line-height:120%;text-align:center; font-weight: bold;}
		.error .svcmt2{font-size:12px;color:#000;line-height:160%;text-align:center;margin:38px 0}
		.error a.btn_st2{width:158px;height:37px;line-height:37px}
		
	</style>
	
	<script type="text/javascript">
		function fncGoAfterErrorPage(){
		    history.back(-2);
		}
	</script>
</head>
<body class="mbbody">
<!-- content -->
<div class="error">
	<p class="svcmt1">
		서비스 이용에 불편을 드려 죄송합니다.<br>
		데이터 처리중 오류가 발생하였습니다.
	</p>
	<p class="svcmt2">
		메인화면으로 이동해주시기 바랍니다.
	</p>
	<div class="btn_center"><a href="<spring:url value="/loginPage.do" />" class="btn_st2">메인화면으로 이동</a></div>
</div>
<!-- //content -->
</body>
</html>