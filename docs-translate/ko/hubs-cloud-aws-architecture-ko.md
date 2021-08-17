---
id: hubs-cloud-aws-architecture
title: AWS System Architecture
sidebar_label: System Architecture
---

![AWS Architecture](img/hubs-cloud-aws-architecture.jpeg)

스택을 생성하면 두 개의 공용 서브넷으로 새 VPC가 생성됩니다.

AWS의 Hubs Cloud는 앱 서버용과 스트리밍 서버용(옵션)의 두 가지 자동 스케일링 그룹을 설정합니다. 서버는 두 개의 AZ에 걸쳐 균형을 유지합니다. 앱 서버는 핵심 앱 기능을 제공하고 스트리밍 서버를 추가해 음성과 비디오 스트리밍을 위한 자원을 늘릴 수 있다.

AWS Cloudfront는 콘텐츠의 에지 캐싱에 맞게 구성되었으며, AWS 람다는 이미지 크기 조정, 비디오 트랜스코딩, 웹 사이트 섬네일링 등 여러 기능에 사용됩니다.

스택을 설정할 때 선택적으로 애플리케이션 로드 밸런서가 여러 서버에 걸쳐 로드 밸런싱을 수행하도록 설정할 수도 있습니다. ALB를 사용하지 않는 경우 DNS 기반 라운드 로빈 로드 밸런싱이 대신 사용됩니다.

사용자 지정 SMTP 서버를 구성하지 않으면 AWS Simple Email Service가 전자 메일에 사용됩니다.

업로드된 asset은 Elastic File Store에 저장되고 정적 자산(JS/CSS/Images)은 S3에 저장됩니다. 데이터베이스가 Postgre입니다.SQL 호환 AWS Aurora Serverless 데이터베이스. 일시 중지를 사용하지 않도록 구성되지 않은 경우 일시 중지됩니다.

구성 암호는 AWS Secrets Manager 및 AWS Parameter Store에 암호화된 문자열로 저장됩니다.

EFS 및 RDS의 데이터는 암호화된 상태로 저장됩니다.