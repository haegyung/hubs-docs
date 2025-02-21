---
id: hubs-cloud-aws-backup-and-restore
title: 백업(Backup) 과 복구(Restore)
sidebar_label: 백업(Backup) 과 복구(Restore)
---

만약에 어떤 문제가 발생하여 백업을 해야하는 경우 또는 기존 허브의 동일한 데이터를 사용하여 두 번째 허브를 만들고자 하는 경우
스택 생성 양식을 사용하면 매우 간단하게 복원할 수 있습니다.

허브의 데이터는 AWS Aurora Serverless 데이터베이스와 AWS Elastic File Store 볼륨(씬, 아바타 등에 사용됨)의 두 가지 요소로 구성됩니다.
이 두 항목은 모두 야간에 자동으로 백업됩니다. 데이터베이스는 데이터베이스 스냅샷(RDS 콘솔에서 볼 수 있음)을 통해 백업되고
EFS 볼륨은 AWS 백업(AWS 백업 콘솔에서 찾을 수 있음)의 Vault로 백업됩니다.

**허브 클라우드 스택을 1.0.0에서 1.1.0으로 업데이트를 해야할까요?** 그렇다면 이 안내를 따라주세요.
[허브 클라우드 버전 1.0.0에서 1.1.0으로 업데이트하기](hubs-cloud-aws-updating-the-stack.md)

### 수동으로 백업 만들기

허브는 매일 밤 자동으로 백업됩니다. 허브의 최신 백업을 만들려면 콘솔을 통해 RDS 스냅샷과 새 AWS 백업 복구 지점을 수동으로 생성할 수 있습니다.

- 데이터 누락 위험을 제한하기 전에 [스택 업데이트](hubs-cloud-aws-updating-the-stack.md)를 수행하여 허브를 "오프라인" 모드로 설정하는 것이 좋습니다.
- 데이터베이스 스냅샷을 작성하려면:
- RDS에서 데이터베이스 클러스터를 선택하고 "작업"에서 "스냅샷 만들기"를 클릭합니다.
- 어떤 클러스터가 허브의 데이터베이스인지 잘 모를 경우 스택 "출력" 섹션의 'AppDb'에서 찾을 수 있습니다.
- 새 복구 지점을 만들려면:
- `storageEFS` 에서 파일시스템 id와, `DailyBackupVault` 의 vault 이름 및 `CloudFormation` 의 스택에 있는 `Resources` 섹션의 `DailyBackupRole` 에 있는 IAM Role 를 얻으세요
- AWS 백업 콘솔에서 `Protected Resources` 로 이동하여 `Storage EFS` 에 대해 확인한 파일 시스템 ID를 선택합니다.
- `Create On-Demand backup` 을 클릭합니다.
- `Vault` 섹션의 `DailyBackupVault` 에서 볼트를 선택하고 IAM 섹션의 `IAM 역할 선택` 을 선택한 후 `DailyBackupRole` 에서 IAM 역할을 선택합니다.

이 백업에서 복원하려는 경우 계속하기 전에 데이터베이스 스냅샷 및 저장소 백업 작업이 모두 완료되었는지 확인하십시오.
스냅샷 상태는 RDS의 `Snapshot` 섹션을 통해, 백업 상태는 AWS 백업의 "Jobs" 섹션에서 확인할 수 있습니다.

### 백업에서 복원

백업에서 복원하려면 [새 스택 만들기](https://hubs.mozilla.com/cloud) 를 선택한 후 "Restore from Backup" 섹션의 스택 작성 양식에 필요한 정보를 제공해야 합니다.
AWS Backup은 현재 영역 간 복원을 지원하지 않으므로 원래 스택과 동일한 영역의 스택에만 백업을 복원할 수 있습니다.
**기존 스택에 대한 스택 업데이트를 수행하여 백업에서 복원을 시도하지마세요**. 이렇게 하면 작동하지 않고 문제가 발생할 수 있습니다. 여러분은 반드시 백업 복원을 위한 새로운 스택을 생성해야 합니다.

기존 스택을 백업의 데이터로 되돌리려면 먼저 스택을 삭제한 다음 백업에서 복원된 새 스택을 만들어야 합니다. 완료된 데이터베이스 스냅샷과 복원하려는 시점에 생성된 복원 지점이 있으면 스택을 삭제해도 안전합니다. 그러나 이전 스택을 삭제하기 전에 먼저 백업과 다른 도메인에 별도의 새 스택을 만들어 백업에 필요한 데이터가 포함되어 있는지 확인하는 것이 좋습니다.

제공해야 하는 정보는 RDS 및 AWS 백업 콘솔에서 확인할 수 있습니다.

- 복원할 RDS 스냅샷 ID
- 복원할 AWS 백업 볼트 이름
- Vault에서 복원할 복구 지점 ARN

### Secrets 복원하기

백업에서 복원하는 데 필요한 암호화 키와 같은 몇 가지 암호가 있습니다. 필요한 암호는 스택을 삭제할 때 자동으로 삭제되지 않으므로 백업을 복원하는 스택을 삭제하더라도 수동으로 제거하지 않는 한 필요한 암호는 AWS 계정에 남아 있어야 합니다. ** 수동으로 암호를 삭제한 경우* 안타깝게도 암호와 관련된 암호이기 때문에 백업을 복원할 수 없습니다. 동정을 표합니다.

- 첫 번째 암호는 백업을 복원하는 스택에 대한 데이터베이스 암호입니다. 이 암호를 찾으려면 AWS Secrets Manager에서 "_Stack Name_Database Secret" 부분을 찾으십시오.
  새 스택을 위한 스택 작성 양식에서 ARN에게 이 암호를 제공해야 합니다.

- 또한, AWS Parameter Store에는 몇 가지 비밀이 저장되어 있습니다. 여러분은 이것들을 파헤칠 필요는 없을겁니다. 수동으로 들어가 삭제하지 않는 한 백업 원본 스택의 스택 이름을 제공하여 이러한 암호를 자동으로 룩업(look up) 할 수 있습니다. 이 값들을 작성 양식의 "백업 및 복원" 섹션에서 지정해야 합니다. (심지어 만일 여러분이 백업본들을 복원하는 스택을 지운다고 하더라도 말이죠.)
  
이 값을 채우고 스택을 생성하면 백업(Backup)에서 복원해야 합니다. 백업되지 않은 "서버 설정" 을 관리자(Admin) 콘솔에서 구성해야 한다는 점을 제외하고 원본 스택과 동일하게 작동해야 합니다.
**참고**: 백업에서 복원된 스택에서 스택 업데이트를 수행하는 경우, "Restore from Backup" 섹션 아래에 있는 매개변수를 변경하지 **말아주세요**. 그것들은 건드릴 필요가 없습니다.
