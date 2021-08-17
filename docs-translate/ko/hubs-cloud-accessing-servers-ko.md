---
id: hubs-cloud-accessing-servers
title: SSH Access
sidebar_label: Advanced: SSH Access
---

SSH를 통해 서버에 액세스하려면 [Admin Console](hubs-cloud-getting-started-ko.md)에서 **Server Access**를 선택하고 안내에 따르십시오. 2단계 인증은 기본적으로 설정되어 있으므로 Google Authenticator와 같은 응용 프로그램이 설치된 2FA 장치가 있어야 서버에 연결할 수 있습니다.


서버가 [Ubuntu 18.04 바이오닉 비버](http://releases.ubuntu.com/18.04/)를 실행하고 있습니다.

### Biome Services
허브 클라우드에 필요한 서비스는 [Chef Habitat](https://www.habitat.sh/) 의 커뮤니티 배포 사이트인 [Biome Supervisor](https://biome.sh/en/) 를 통해 설치, 관리 및 감독됩니다. Biome의 작동 방식을 더 잘 이해하려면 [Chef Habitat Guide](https://www.habitat.sh/docs/using-habitat/) 를 참조하십시오.

바이오 명령행 도구는 '바이오'이며 서비스는 '하브' 사용자로 운영됩니다.

#### Logging

Logging is sent to journald. To tail the log, as `root` you can use [`journalctl`](https://www.freedesktop.org/software/systemd/man/journalctl.html):

```
journalctl -f
```

#### Managing services

실행 중인 서비스 목록을 루트로 보려면:

```
bio sup status
```

bio svc start와 bio svc stop을 통해 서비스를 시작/중지할 수 있습니다. 'biosvc load' 또는 'biosvc unload'를 통해 수동으로 서비스를 언로드하거나 로드하지 않는 것이 좋습니다. 이 경우 채널 연결이 끊어지고 업데이트가 금지됩니다.
