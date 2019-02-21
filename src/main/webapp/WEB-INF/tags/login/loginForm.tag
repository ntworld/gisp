<%@ tag language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!-- Form-->
<div class="form">
  <div class="form-toggle"></div>
  <div class="form-panel one">
    <div class="form-header">
      <h1>Account Login</h1>
    </div>
    <div class="form-content">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required="required"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required="required"/>
        </div>
        <div class="form-group">
			<div class="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" name="recovery" id="recovery">
				<label class="custom-control-label" for="recovery" id="label-recovery">Remember Me</label>
			</div>
			<a class="form-recovery" href="#">Forgot Password?</a>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">Log In</button>
        </div>
      </form>
    </div>
  </div>
  <div class="form-panel two">
    <div class="form-header">
      <h1>Register Account</h1>
    </div>
    <div class="form-content">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required="required"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required="required"/>
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
          <button class="btn btn-warning" type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

<script src="<spring:url value="/asset/js/loginForm.js" />"></script>