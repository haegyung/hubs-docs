---
id: local-ubuntu-vm-setup
title: Local Ubuntu VM Setup
---

Windows에서 개발할 때는 로컬 Ubuntu VM을 사용하는 것이 좋습니다. 'yarn'과 허브에서 작동하는 데 필요한 다양한 툴이 Linux에서 실행될 때(WSL 내) 가장 빠르게 실행됩니다.

다음은 호스트 OS에서 허브를 올바르게 테스트하기 위한 몇 가지 권장 네트워크 구성입니다.

- VM에서 포트 포워딩을 포트 8080('웹 팩-dev-서버'의 경우) 및 포트 4000(레티큘럼의 경우)을 '127.0.1.1'(또는 호스트 OS에서 일부 다른 로컬 주소 지정 가능한 IP 주소)로 설정합니다.

- 도메인 'hubs.local'을 '127.0.1.1'(또는 선택한 IP)에 등록하는 'hosts' 파일(Windows에서 'C:\윈도우\system32\drivers\etc\hosts')을 추가합니다.

따라서 스택이 VM에서 실행 중일 때 'https://hubs.local'(포트 8080 또는 4000 포함)을 통해 서버를 타격할 수 있으며 CSP 구성 덕분에 전체 앱을 제대로 사용할 수 있습니다.