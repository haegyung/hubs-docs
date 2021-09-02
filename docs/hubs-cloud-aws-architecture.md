---
id: hubs-cloud-aws-architecture
title: AWS 시스템 아키텍처
sidebar_label: System Architecture
---

![AWS Architecture](img/hubs-cloud-aws-architecture.jpeg)

스택을 생성하면 두 개의 공용 서브넷으로 새 VPC가 생성됩니다.

AWS의 Hubs Cloud는 앱 서버용과 스트리밍 서버용(옵션)의 두 가지 자동 스케일링 그룹을 설정합니다.
서버는 두 개의 AZ에 걸쳐 균형을 유지합니다.
앱 서버는 핵심 앱 기능을 제공하고 스트리밍 서버를 추가해 음성과 비디오 스트리밍을 위한 자원을 늘릴 수 있습니다.

AWS Cloudfront는 콘텐츠의 에지 캐싱에 맞게 구성되었으며, `AWS lambda` 서비스는 이미지 크기 조정, 비디오 트랜스코딩, 웹 사이트 섬네일링 등 여러 기능에 사용됩니다.

스택을 설정할 때 선택적으로 애플리케이션 로드 밸런서가 여러 서버에 걸쳐 로드 밸런싱을 수행하도록 설정할 수도 있습니다. ALB를 사용하지 않는 경우 DNS 기반 라운드 로빈 로드 밸런싱이 대신 사용됩니다.

커스텀 SMTP 서버를 구성하지 않으면 `AWS Simple Email Service` 가 메일 서비스에 사용됩니다.

업로드된 asset은 `Elastic File Store` 에 저장되고 static assets(JS/CSS/Images)은 `S3` 에 저장됩니다.
데이터베이스는 일시 정지를 비활성화 하도록 구성하지 않은 한 사용하지 않는 usecase 에 대한 것은 중지가 가능하도록 만들어진 `AWS Aurora Serverless` 서비스와 호환이 가능한 `PostgreSQL` 를 사용하고 있습니다. 일시 중지를 사용하지 않도록 구성되지 않은 경우 일시 중지됩니다.

Configuration secrets 들은 암호화된 문자열로 `AWS Secrets Manager` 및 `AWS Parameter Store` 에 저장됩니다.

EFS 및 RDS의 데이터는 암호화된 상태로 저장됩니다.