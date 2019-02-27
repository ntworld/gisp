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
	
	$('#btn-register').on('click', function(e) {
		e.preventDefault();
		
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
		
		if ($('#userid').val() != null && $('#password').val()) {
			$('#form-login').submit();
		} else {
			$('#form-login')[0].reset();
			alert('아이디와 비밀번호를 확인해 주세요.');
			return false;
		}
	})
});	