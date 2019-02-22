var loginProcess = {
		
		getUserInfo: function(userid) {
		    $.ajax({
		        type: "GET",
		        url: "/loginInfo.do",
		        data: {
		        	"userId": userid
		        },
		        dataType : "json",
		        success: function(data){ //장소검색이 완료됐을 때
		        	loginProcess.checkLoginInfo(data);
		        },
		        error: function(xhr, status, error) {
		        	console.log(error);
		        }  
		        
		    });
		},
		checkUserInfo: function(data) {
			
		}
		
}