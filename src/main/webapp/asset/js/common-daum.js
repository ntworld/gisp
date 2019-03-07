//지도를 생성
var map = new daum.maps.Map(
	document.getElementById('map'),
	option = {
		center: new daum.maps.LatLng(37.52140717009771, 127.19273703862935), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
	}
);

var geocoder = new daum.maps.services.Geocoder(); //주소-좌표 변환 객체를 생성
var markers = [];
var marker = new daum.maps.Marker(), // 클릭한 위치를 표시할 마커
infowindow = new daum.maps.InfoWindow({zindex:1}); // 클릭한 위치에 대한 주소를 표시할 인포윈도우

function testListData(category) {
	
	$.ajax({
        type: 'GET',
        url: '/selectTestList.do',
        data: { 
        	'category': category 
        },
        dataType : 'json',
        success: function(data, status){ //장소검색이 성공
        	displayTestListData(data, category);
        },
        complete: function() {
        	completeLoad();
		},
        error: function(xhr, status, error) {
        	console.log(error);
        }  
    });
	
};

function displayTestListData(data, category) {
	
	var bounds = new daum.maps.LatLngBounds();

	for(var i = 0; i < data.length; i++) {
		// 마커를 생성하고 지도에 표시
		var placePosition = new daum.maps.LatLng(data[i].x_coord, data[i].y_coord),
		    marker = addTestListMarker(placePosition, category);
		
		// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가
		bounds.extend(placePosition);
	}
	
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정
    map.setBounds(bounds);
    
};

function addTestListMarker(position, category) {
	
	var imageSrc = (category == 'hanam_wifi') ? '/asset/images/wifi.png' : '/asset/images/cctv.png',
		imageSize = new daum.maps.Size(25, 25),
		markerImage = new daum.maps.MarkerImage(imageSrc, imageSize),
	    marker = new daum.maps.Marker({
		    position: position, // 마커의 위치
		    image: markerImage 
		});
	
    marker.setMap(map); // 지도 위에 마커를 표출
    markers.push(marker);  // 배열에 생성된 마커를 추가

    return marker;
    
};

// 키워드 검색을 요청하는 함수
function searchPlaces() {
	
	var keyword = document.getElementById('keyword').value;
	
    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }
    
    // 키워드로 장소검색을 요청
   	searchKeyword(keyword);
    
};

// 다음, 카카오 api 통신
function searchKeyword(keyword) {
    $.ajax({
        type: 'GET',
        url: 'https://dapi.kakao.com/v2/local/search/keyword.json?query=' + keyword,
        headers: {'Authorization': 'KakaoAK 9171188a2bc0e55ea3d6e5009b0e0dba'},
        dataType : 'json',
        success: function(data, status){ //장소검색이 완료됐을 때
        	data.meta.total_count != 0 ? displayPlaces(data.documents) : alert('검색 결과가 존재하지 않습니다.');
        },
        error: function(xhr, status, error) {
        	console.log(error);
        }  
        
    });
};

//검색 결과 목록과 마커를 표출하는 함수
function displayPlaces(places) {

    var listEl = document.getElementById('placesList'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
    bounds = new daum.maps.LatLngBounds(), 
    listStr = '';
    
    // 검색 결과 목록에 추가된 항목들을 제거
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거
    removeMarker();
	
    // json형태로 받은 장소 데이터 가공
    for(var i = 0; i < places.length; i++) {
    	
    	 // 마커를 생성하고 지도에 표시
         var placePosition = new daum.maps.LatLng(places[i].y, places[i].x),
             marker = addMarker(placePosition, i), 
             itemEl = getListItem(i, places[i], placePosition); // 검색 결과 항목 Element를 생성
    	 
         // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가
         bounds.extend(placePosition);
         
         // 마커와 검색결과 항목에 mouseover 했을때 해당 장소에 인포윈도우에 장소명을 표시
         // mouseout 했을 때는 인포윈도우를 닫음
         (function(marker, title) {
         	
             daum.maps.event.addListener(marker, 'mouseover', function() {
                 displayInfowindow(marker, title);
             });

             daum.maps.event.addListener(marker, 'mouseout', function() {
                 infowindow.close();
             });
             
             itemEl.onclick =  function () {
                 displayInfowindow(marker, title);
             };
             
         })(marker, places[i].place_name);

         fragment.appendChild(itemEl);
    }
	
    // 검색결과 항목들을 검색결과 목록 Elemnet에 추가
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정
    map.setBounds(bounds);
    
    $(function() {
    	$('#menu_wrap').slideDown();
    });
};

// 검색결과 항목을 Element로 반환하는 함수
function getListItem(index, places, placePosition) {

    var el = document.createElement('li'),
    itemStr = '<span class="markerbg marker_' + (index + 1) + '"></span>' 
    		+ '<div class="info" id="info_' + (index + 1) + '">'
    		+ '<h5>' + places.place_name + '</h5>';

    if (places.road_address_name) {
        itemStr += '<span>' + places.road_address_name + '</span>'
        		 + '<span class="jibun gray">' 
        		 +  places.address_name  
        		 + '</span>';
    } else {
        itemStr += '<span>' 
        		+  places.address_name  
        		+ '</span>'; 
    }
                 
    itemStr += '<span class="tel">' 
    		+ places.phone  
    		+ '</span>' 
    		+ '</div>';           

    el.innerHTML = itemStr;
    el.className = 'item';
    
    $(function() {
    	$(document).on('click', '#info_' + (index + 1), function() {
    		map.panTo(placePosition);
    	})
    });
    
    return el;
};

// 마커를 생성하고 지도 위에 마커를 표시하는 함수
function addMarker(position, idx, title) {
	
    var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지
        imageSize = new daum.maps.Size(36, 37),  // 마커 이미지의 크기
        imgOptions =  {
            spriteSize : new daum.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin : new daum.maps.Point(0, (idx * 46) + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new daum.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new daum.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage 
        });
    marker.setMap(map); // 지도 위에 마커를 표출
    markers.push(marker);  // 배열에 생성된 마커를 추가

    return marker;
    
};

// 지도 위에 표시되고 있는 마커를 모두 제거
function removeMarker() {
	
    for ( var i = 0; i < markers.length; i++ ) {
        markers[i].setMap(null);
    }   
    markers = [];
    
};

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수
// 인포윈도우에 장소명을 표시
function displayInfowindow(marker, title) {
	
    var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);
    
};

 // 검색결과 목록의 자식 Element를 제거하는 함수
function removeAllChildNods(el) {   
	
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
    
};

function searchDetailAddrFromCoords(coords, callback) {
    // 좌표로 법정동 상세 주소 정보를 요청
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
};

function completeLoad(){
	$(function() {
		setTimeout(function(){
			$('.loaderContainer').removeClass('load');
			removeOverlay();
		}, 500);
	});
};

function removeOverlay() {
	$(function() {
		$('.overlay-loader').fadeOut('slow');
	});
};

//지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록
daum.maps.event.addListener(map, 'rightclick', function(mouseEvent) {
	searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
	    if (status === daum.maps.services.Status.OK) {
	        var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
	        detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
	        
	        var content = '<div class="bAddr">' +
	        				'<span class="title">법정동 주소정보' +
	                        	'<button id="btn-infowindow-close" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + 
	        				'</span>' + 
	        				detailAddr + 
	                      '</div>';
	
	        // 마커를 클릭한 위치에 표시
	        marker.setPosition(mouseEvent.latLng);
	        marker.setMap(map);
	
	        // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시
	        infowindow.setContent(content);
	        infowindow.open(map, marker);
	        
	        map.panTo(mouseEvent.latLng);
	        
	        $(function() {
	        	$(document).on('click', '#btn-infowindow-close', function() {
	        		marker.setMap(null);
	        		infowindow.close();
	        	})
	        });
	    }
	});
});

// 장소검색, 목록 표시 jQeury 이벤트
$(document).ready(function(){
	var $submenu = $('#menu_wrap');
	$submenu.hide();
	
	$('#btn-search-close').click(function() {
		if($submenu.is(":visible"))
			$submenu.slideUp();
	});
		
	$('input:checkbox[name="category"]').click(function() {
		if(this.checked) {
			var category = $(this).val();
			$submenu.hide();
        	$('.overlay-loader').fadeIn(100);
			$('.loaderContainer').addClass('load'); 
			setTimeout(function() {
				testListData(category);
			}, 1500);
		} else {
			removeMarker();
		}
	});
	
	//지도 확대, 축소 컨트롤
	$('span[id="zoomControl"]').click(function() {
		map.setLevel($(this).attr('data-zoom') == 'zoomin' ? map.getLevel() - 1 : map.getLevel() + 1);
	});
});
