$(document).ready(function() {
	var panelOne = $('.form-panel.two').height(),
		panelTwo = $('.form-panel.two')[0].scrollHeight;
	
	$('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
		e.preventDefault();
		
		$('.form-toggle').addClass('visible');
		$('.form-panel.one').addClass('hidden');
		$('.form-panel.two').addClass('active');
		$('.form').animate({
			'height': panelTwo
		}, 200);
	});
	
	$('.form-toggle').on('click', function(e) {
		e.preventDefault();
		
		$(this).removeClass('visible');
		$('.form-panel.one').removeClass('hidden');
		$('.form-panel.two').removeClass('active');
		$('.form').animate({
			'height': panelOne
		}, 200);
	});
	
	$('#btn-register').on('click', function() {
		
		var password = $('#register-password').val(),
			cPassword = $('#cpassword').val();
		
		if (password == cPassword) {
			$('#form-register').submit();
			alert('회원가입 완료!!');
		} else {
			$('#cpassword').val('');
			alert('비밀번호가 맞지 않습니다. 다시 확인해 주세요.');
			return false;
		}
	});
	
	$('#btn-login').on('click', function() {
		
		$.ajax({
			url: "/getAccountData.do",
			type: "GET",
			data: {
				"userid" : $('#userid').val()
			},
			dataType: "json",
			success: function(accountData) {
				
				if ($('#password').val() != accountData.password) {
					getLoginAlert();
					return false;
				}
				
				$('#form-login').submit();
			},
	        error: function() {
	        	getLoginAlert();
	        }
		});
	});
	
	function getLoginAlert() {
		$('#login-alert').append(
				'<div class="alert alert-dismissible alert-danger">' + 
				'<button type="button" class="close" data-dismiss="alert">&times;</button>' +
				'<strong>경고!</strong>아이디와 비밀번호를 확인해 주세요.</div>');
		
		$('#form-login')[0].reset();
	};
});	