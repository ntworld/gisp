<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
  <a class="navbar-brand" href="#">Practice GIS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/mainView.do">Home <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    
    <form class="form-inline my-2 my-lg-0" onsubmit="searchPlaces(); return false;">
		<input class="form-control mr-sm-4" type="text" value="" id="keyword" size="27" placeholder="키워드를 입력해 주세요"> 
		<button id="btn-search" class="btn btn-success my-2 my-sm-0" type="submit">검색하기</button>
	</form>
  </div>
</nav>