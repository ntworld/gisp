<%--
  Class Name : mainView.jsp 
  Description : 메인화면
  Modification Information
 
      수정일             수정자           수정내용
    -----------  --------    ---------------------------
    2019.2.21    KJE          최초 생성
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="include" tagdir="/WEB-INF/tags/include" %>

<jsp:directive.include file="/WEB-INF/view/__system/taglibs.jsp" />
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Practice GIS</title>
    
    <include:include-main/>
    
</head>
<body>

    <!--  header  -->
    <jsp:directive.include file="/WEB-INF/view/__layouts/header.jsp" />
    <!--  // header  -->
    
	<div class='overlay-loader'>
		<div class='loaderContainer'>
			<div class='crs topr'></div>
			<div class='crs topl'></div>
			<div class='crs botr'></div>
			<div class='crs botl'></div>
			<div class='dot'></div>
		</div>
	</div>
    
    <!-- .container -->
    <div class="map_container">
		<div id="map" class="map"></div>
		<div class="custom_zoomcontrol radius_border"> 
			<span id="zoomControl" data-zoom="zoomin"><img src="http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대"></span>  
			<span id="zoomControl" data-zoom="zoomout"><img src="http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소"></span>
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
				<label class="custom-control-label" for="hanam_wifi">하남시 무료 Wifi</label>
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
