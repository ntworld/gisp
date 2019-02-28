<%@ tag language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<div id="login-alert">
</div>

<!-- Form-->
<div class="form">
  <div class="form-toggle"></div>
  <div class="form-panel one">
    <div class="form-header">
      <h1>Account Login</h1>
    </div>
    <div class="form-content">
      <form id="form-login" action="/loginProcess.do" method="post">
        <div class="form-group">
          <label for="userId">Username</label>
          <input type="text" id="userid" name="userid" required="required"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required="required"/>
        </div>
        <div class="form-group">
			<div class="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" name="useCookie" id="useCookie" value="true">
				<label class="custom-control-label" for="useCookie" id="label-recovery">Remember Me</label>
			</div>
			<a class="form-recovery" href="#">Forgot Password?</a>
        </div>
        <div class="form-group">
          <button id="btn-login" class="btn btn-primary" type="button">Log In</button>
        </div>
      </form>
    </div>
  </div>
  <div class="form-panel two">
    <div class="form-header">
      <h1>Register Account</h1>
    </div>
    <div class="form-content">
      <form id="form-register" action="/register.do" method="post">
        <div class="form-group">
          <label for="userid">Username</label>
          <input type="text" id="register-userid" name="userid" required="required"/>
        </div>
        <div class="form-group">
          <label for="register-password">Password</label>
          <input type="password" id="register-password" name="password" required="required"/>
        </div>
        <div class="form-group">
          <label for="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" name="cpassword" required="required"/>
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required="required"/>
        </div>
        <div class="form-group">
          <button class="btn btn-warning" id="btn-register">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

<script src="<spring:url value="/asset/js/loginForm.js" />"></script>