---
id: hubs-cloud-accessing-servers
title: SSH Access
sidebar_label: Advanced: SSH Access
---

SSH를 통해 서버에 액세스하려면 [Admin Console](hubs-cloud-getting-started-ko.md) 에서 **Server Access**를 선택하고 안내에 따라주세요.
2-factor 인증은 기본적으로 설정되어 있으므로 `Google Authenticator` 와 같은 응용 프로그램이 설치된 2FA 장치가 있어야 서버에 연결할 수 있습니다.


서버가 [Ubuntu 18.04 바이오닉 비버](http://releases.ubuntu.com/18.04/) 를 실행하고 있습니다.

### Biome Services
허브 클라우드에 필요한 서비스는 [Chef Habitat](https://www.habitat.sh/) 의 커뮤니티 배포 사이트인 [Biome Supervisor](https://biome.sh/en/) 를 통해 설치, 관리 및 감독됩니다.
Biome의 작동 방식을 더 잘 이해하려면 [Chef Habitat Guide](https://www.habitat.sh/docs/using-habitat/) 를 참조해주세요.

바이오 커맨드라인 도구는 `bio` 이며 서비스는 `hab` user로 실행됩니다.

#### Logging

journald 에게 로그가 전달됩니다. 로그의 마지막 부분 root로 tail을 붙이기 위해 [`journalctl`](https://www.freedesktop.org/software/systemd/man/journalctl.html) 을 사용할 수 있어요: 

```
journalctl -f
```

#### Managing services

실행 중인 서비스 목록을 루트로 보려면:

```
bio sup status
```

`bio svc start` 와 `bio svc stop` 을 통해 서비스를 시작하거나 중지할 수 있습니다.
`biosvc load` 또는 `biosvc unload` 를 통해 수동으로 서비스를 언로드(un-load)하거나 로드(load)하지 않는 것이 좋습니다.
이 경우 채널 연결이 끊어지고 업데이트가 금지되기 때문입니다.
