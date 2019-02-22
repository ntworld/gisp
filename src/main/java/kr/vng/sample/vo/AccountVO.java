package kr.vng.sample.vo;

import java.sql.Date;

public class AccountVO {
	
	private String id;
	private String password;
	private String email;
	private String sessionkey;
	private Date sessionlimit;
	private boolean useCookie;
	
	public boolean isUseCookie() {
		return useCookie;
	}
	public void setUseCookie(boolean useCookie) {
		this.useCookie = useCookie;
	}
	public String getSessionkey() {
		return sessionkey;
	}
	public void setSessionkey(String sessionkey) {
		this.sessionkey = sessionkey;
	}
	public Date getSessionlimit() {
		return sessionlimit;
	}
	public void setSessionlimit(Date sessionlimit) {
		this.sessionlimit = sessionlimit;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}
