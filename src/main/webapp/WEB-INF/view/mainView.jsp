<%--
  Class Name : mainView.jsp 
  Description : 메인화면
  Modification Information
 
      수정일             수정자           수정내용
    -----------  --------    ---------------------------
    2017.05.16   YSH          최초 생성
 
    author   : VNG YSH 
    since    : 20117.05.16 
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:directive.include file="/WEB-INF/view/__system/taglibs.jsp" />
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <link rel="icon" href="<spring:url value="/favicon.ico" />">
    <title>Starter Template for Bootstrap</title>
    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
    <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
    <link href="<spring:url value="/asset/css/common-daum.css" />" rel="stylesheet">
    
    <script src="<spring:url value="/asset/bootstrap/js/ie-emulation-modes-warning.js" />"></script>
    <script type="text/javascript" src='<spring:url value="/asset/js/jquery-3.2.1.min.js" />'></script>
    <script type="text/javascript" src='<spring:url value="/asset/js/jquery.cookie.js" />'></script>
    <script src="<spring:url value="/asset/bootstrap/js/ie10-viewport-bug-workaround.js" />"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	<script src="https://unpkg.com/simplebar@latest/dist/simplebar.js"></script>
    <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9171188a2bc0e55ea3d6e5009b0e0dba&libraries=services"></script>
    
</head>
<body>

    <!--  header  -->
    <jsp:directive.include file="/WEB-INF/view/__layouts/header.jsp" />
    <!--  // header  -->
    
    <!-- .container -->
    <div class="map_container">
		<div id="map" class="map"></div>
		<div class="custom_zoomcontrol radius_border"> 
			<span onclick="zoomIn()"><img src="http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대"></span>  
			<span onclick="zoomOut()"><img src="http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소"></span>
		</div>	
		<div class="search_wrap">
		    <div id="menu_wrap" class="bg_white" data-simplebar>
		    	<button id="btn-search-close" type="button" class="close" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
		        <ul id="placesList"></ul>
		        <div id="pagination"></div>
		    </div>
	    </div>
	    <div id="category_wrap">
	    	<div class="custom-control custom-checkbox custom-control-inline">
				<input type="checkbox" class="custom-control-input" name="category" id="hanam_wifi" value="hanam_wifi">
				<label class="custom-control-label" for="hanam_wifi">하남시 무료 Wi-Fi</label>
			</div>
	    	<div class="custom-control custom-checkbox custom-control-inline">
				<input type="checkbox" class="custom-control-input" name="category" id="jeonju_cctv" value="jeonju_cctv">
				<label class="custom-control-label" for="jeonju_cctv">전주시 CCTV</label>
			</div>
	    </div>
	</div>
    <!-- /.container -->
    
    <script src="<spring:url value="/asset/js/common-daum.js" />"></script>
</body>
</html>
