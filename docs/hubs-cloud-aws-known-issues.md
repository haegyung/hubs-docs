---
id: hubs-cloud-aws-known-issues
title: AWS Known Issues
sidebar_label: Known Issues
---

#### I get the error "Value for parameter availabilityZone is invalid. Subnets can currently only be created in the following availability zones: X, Y

이것은 AWS에서 알려진 문제입니다. https://github.com/widdix/aws-cf-templates/issues/36을 참조하십시오.
이 문제를 해결하려면 '고급' 섹션에서 "서브넷 가용성 영역" 값을 조정하여 X, Y와 일치하는 대체 서브넷 구성을 선택하고 다시 시도하십시오.
