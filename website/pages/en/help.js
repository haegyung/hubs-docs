/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>여러분이 찾는 키워드가 없으신가요?</h1>
          </header>

          <p>
            만약 저희의 <a href="/docs/">문서</a>가 여러분의 질문에 답변을 드리지 못한다면,{" "}
            여기서 저희에게 연락할 수 있는 몇가지 옵션이 있어요:
          </p>

          <strong>버그 리포트(Bug report)와 기능 추가(add a new feature)</strong>
          <p>
            저희는 깃허브에서 기능 추가와 버그 추적을 하고 있습니다.
            이미 열려 있는 <a href="https://github.com/mozilla/hubs/issues">티켓들</a>을 확인해주시거나,{" "}
            <a href="https://github.com/mozilla/hubs/issues/new/choose">새로운 이슈나 기능 추가</a> 를 요청해주세요.
          </p>

          <strong>토론(Discussion)</strong>
          <p>
            만약 여러분이 허브 팀 또는 커뮤니티 팀과 토픽(Topic)을 토론하고 싶으시다면 여러분의 브라우저에서 저희의 깃허브{" "}
            <a href="https://github.com/mozilla/hubs/discussions">토론장(discussion board)</a>, 또는{" "}
            <a href="https://github.com/mozilla/hubs/discussions/new">새로운 토론장(new discussion)을 열어주세요</a>.
          </p>

          <strong>커뮤니티 방(Community Chat)</strong>
          <p>
            실시간으로 대화하고 싶으시다면, 저희의 {" "}
            <a href="https://discord.gg/wHmY4nd">디스코드 채팅 서버</a>에 합류해주세요.
          </p>

          <strong>이메일(Email)</strong>
          <p>
            If you need to share sensitive information in order to get help, you can email us at{" "}
            만약 여러분이 도움을 요청하기에 민감한 정보를 공유해야 할 것 같다면,
            <a href="mailto:hubs@mozilla.com">hubs@mozilla.com</a>  이메일을 이용해주세요.
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
