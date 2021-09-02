11---
id: system-overview
title: 전반적인 시스템의 개요(Overview)
---

# [The Client](https://github.com/mozilla/hubs) 
사용자가 보는 거의 모든 내용을 렌더링합니다. HTML 페이지는 retculum에서 제공되지만 클라이언트에서 가져옵니다.

프론트엔드는 2D용 React와 3D 장면용 Three.js 및 A-Frame으로 제작됩니다.
네트워크 프레임을 사용하여 클라이언트 간에 3D 컨텐츠가 동기화됩니다. 물리학은 Ammo.js/Wasm을 사용하여 클라이언트에서 실행됩니다.

클라이언트의 각 페이지는 백엔드 Reticulum에서 제공됩니다. /admin 폴더에는 허브와 별도의 Admin Panel 코드가 포함되어 있습니다.

### [networked aframe](https://github.com/networked-aframe/networked-aframe)
게임 네트워킹은 네트워크 프레임 라이브러리를 사용하여 구현됩니다.
현재는 가입 및 발차기와 같은 작은 메시지 서브셋에 대해 권한 부여 및 인증이 시행되고 있지만, 메시지 수준 인증을 수행할 수 있는 기능이 있습니다.

### Ammo.js/Wasm
모든 물리 시뮬레이션은 클라이언트에서 수행됩니다. 어떤 종류의 서버측 물리 시뮬레이션도 없습니다.
서버는 기본적으로 클라이언트 메시지를 가져와서 약간 수정하고 권한을 추가한 다음 연결된 모든 피어에 메시지와 업데이트를 브로드캐스트하는 메시지 버스입니다.
객체에 대한 소유권이나 동종 업체 간의 게임 내 경험을 조정하기 위한 기타 부수적인 우려와 같은 것들은 모두 클라이언트 프로토콜 구현에 기초합니다.

# [Reticulum](https://github.com/mozilla/reticulum)
erlang/elixir/phoenix 노드의 메시 네트워크로, 다음을 포함한 사용자 간의 모든 비음성/비디오 트래픽을 담당합니다.
* 아바타 변신(Avatar transforms)
* 인증/매직 사인 인 링크(Auth/magic sign in links)
* 암호 해독(Decrypt)
* 장면 업데이트(Scene updates)
* 사용자 권한 유효성 검사(User Permission validation)

룸에 연결하는 경우 웹 소켓을 통해 이 메쉬의 로드 밸런싱 노드에 연결하는 것입니다.
메시지는 피닉스 채널이라는 pub/sub 시스템을 통해 메시(mesh) 를 통해 해당 룸의 모든 사용자 간에 전달됩니다.

# [Habitat](https://www.chef.io/products/chef-habitat)
Habitat은 패키징과 조정을 제공합니다. 배포는 Habitat에 의해 조정됩니다. 

모든 AWS EC2 인스턴스는 Habitat를 실행하고 Habitat는 Hubs, Reticulum, Dialog 등의 패키지를 실행합니다.

# [Dialog](https://github.com/mozilla/dialog)
음성, 비디오 및 오디오 트래픽은 오픈 소스 "미디어 수프(mediasoup)" 프로젝트를 기반으로 WebRTC Server를 통해 처리됩니다.
(우리는 formerly 하게 "Janus" 프로젝트를 WebRTC 서버로 사용했습니다.)
각 참가자가 중앙 라우팅 머신으로 데이터를 보낸 다음 모든 참가자 데이터를 각 참가자에게 다시 보내는 SFU(Selective Forwarding Unit) 토폴로지를 사용합니다.

# Postgres DB
데이터 영속성 상태를 위해서, 우리는 화려한(fancy) 일을 하지 않습니다.
Reticulum 뒤에 postgresql 데이터베이스가 있고 내구성이 뛰어난 두 가지 저장 방법을 위한 파일 저장소가 있습니다.
Reticulum은 둘 다 관리합니다. 고정된 객체(Pin object) 등등, 영구적인 룸 상태(Permanent Room State) 를 업데이트하는 경우
두 백업 저장소의 bit 들을 업데이트하기 위해 reticulum 안에서 APIs 로 인터페이싱을 해야 합니다.
