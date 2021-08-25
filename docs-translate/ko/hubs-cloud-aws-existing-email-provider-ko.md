---
id: hubs-cloud-aws-existing-email-provider
title: Using an Existing Email Provider
sidebar_label: Using an Existing Email Provider
---

기본적으로 허브는 지정한 Route 53 도메인의 이메일에 대해 Amazon Simple Email Service로 설정됩니다. 이메일을 보내기 위해 여러분이 가지고있는 SMTP 설정을 사용할 수도 있습니다. 
사용하려는 고유한 SMTP 설정이 있는 경우 스택을 생성할 때 "발신 이메일 도메인(Outgoing Domain Name)"에 대해 "내부 도메인 이름(Internal Domain Name)"과 동일한 도메인을 선택해주세요.
설정 프로세스 중에 관리자(administrator) 계정에 로그인하려면 스택 생성 중에 수신한 확인 이메일을 계속 클릭해야 합니다.


허브가 배포되고 실행되면 서버 설정 섹션의 허브 관리자(Admin) 콘솔에서 이메일 공급자(Email Provider)의 사용자 지정(Customized) SMTP 정보를 설정할 수 있습니다.
