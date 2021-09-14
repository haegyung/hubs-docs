# Mozilla Hubs Docs


이 저장소는 [Mozilla Hubs](http://hubs.mozilla.com) 를 위한 저장소이며, Hubs Cloud, Spoke 와 관련이 있는 저장소입니다.
문서는 현재 개발 및 업데이트 중에 있으며, 만약 어떤 변경점이나 여러분이 추천할만한 업데이트 사항이 있다면, 편하게 Pull Request 또는 저희에게 [Discord Server](http://discord.gg/wHmY4nd) 으로 DM(Direct Message) 를 주시면 감사하겠습니다. 
현재 이 문서는 [Docusaurus](https://docusaurus.io/) 로 개발되었습니다.

# Docusaurus information 
## 문서(Documents) 에 포함된 내용

* [5분만에 시작하기](#get-started-in-5-minutes)
* [폴더(Directory) 구조](#directory-structure)
* [컨텐츠 수정하기](#editing-content)
* [컨텐츠 추가하기](#adding-content)
* [Full Documentation](#full-documentation)

## Get Started in 5 Minutes

1. 웹 사이트에 대한 모든 종속성이 설치되어 있는지 확인합니다.:

```sh
# Navigate to the website directory
$ cd website

# Install dependencies
$ npm ci
```
2. 여러분의 dev server 를 실행합니다:

```sh
# Start the site
$ npm start
```

### 폴더 구조(Directory Structure)

프로젝트 파일 구조는 다음과 같아야 합니다.

```
my-docusaurus/
  docs/
    doc-1.md
    doc-2.md
    doc-3.md
  website/
    core/
    node_modules/
    pages/
    static/
      css/
      img/
    package.json
    sidebar.json
    siteConfig.js
```

## 콘텐츠 수정하기

### 기존 문서를 수정하기

`docs/` 로 이동하여 해당 문서를 수정하여 문서를 수정합니다.

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

수정해주세요..
```

문서에 대한 자세한 정보는 [here](https://docusaurus.io/docs/en/navigation) 를 클릭바랍니다.

### 기존 포스트를 수정하기

`웹사이트/블로그` 로 이동하여 해당 게시물을 수정하여 블로그 게시물을 수정합니다.

`website/blog/post-to-be-edited.md`
```markdown
---
id: post-needs-edit
title: This Blog Post Needs To Be Edited
---

Edit me...
```

문서에 대한 자세한 정보는 [here](https://docusaurus.io/docs/en/adding-blog) 를 클릭바랍니다.

## 콘텐츠 추가하기

### 기존에 있던 사이드바(Side bar) 에 콘텐츠 추가하기

1. 문서를 `/docs`에 새 마크다운 파일로 생성합니다(예: `docs/newly-created-doc.md`):

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. `website/sidebar.json`의 기존 사이드바에서 해당 문서의 ID를 참조하세요.

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```
 
새로운 문서를 추가하는 것에 대한 자세한 정보를 원하시면 [이 곳](https://docusaurus.io/docs/en/navigation) 을 클릭해주세요.

## Full Documentation
.
도큐사우르스(Docusaurus) 에 대한 조금 더 자세한 정보는 [웹 사이트](https://docusaurus.io/) 에서 확인하실 수 있습니다.
