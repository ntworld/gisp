# 개발환경
	- Java 1.7 이상 
	- Egovframework 3.6.0
	- Spring framework 4.1.2
	- maven 3.3.3
	- Tomcat 7.0 이상
	- Mybatis

# History
	
	@ 2017-04-18
		
		- Log
			> slf4j-log4j 설정(File, Console)
			> log4jdbc-remix 설정(쿼리 및 결과 정렬)
			> Service Impl Class에서의 Exception에 대한 개별 로그 처리(context-aspect.xml)
			
		- Error
			> Http Status Code별 에러페이지 설정(web.xml)
			> Servlet Container Exception에 대한 에러페이지 설정(dispatcher-servlet.xml)
		 
		- Transaction
			> Service Impl Class에서의 트랜잭션 처리(context-transaction.xml)
			
		- profile
			> 서버환경에 따른 profile 구성(local, dev, stg, prd)
			
		- properties
			> profile별 프로퍼티 설정 및 파일 생성(context-properties.xml, /resources/properties/**)
			
		- DataSource
			> 접속정보 프로퍼티파일 연결 및 DBCP 설정(context-datasource.xml)
		
		- Email
			> velocity Email Templet 적용(context-email.xml)
			
		- Login
			> Spring Security 적용(context-security.xml)
			> Remember me 설정
			> LoginSuccess Handler
			> LoginFail Handler
			> Logout Handler
			> MemverDetail Service
			
		- Filter(web.xml)
			> encodingFilter
			> CompressionFilter
			> springSecurityFilterChain
			> xssEscapeServletFilter
						
		- Common Util Class
			> FileUtil
			> StringUtil
			
		- Sample
			> 로그인
			> 게시판 조회, 등록, 파일저장, 페이징			
			> MailUtil
			> interceptor
			> MessageConverter(json)

			