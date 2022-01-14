import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

//next에서 제공하는 document를 커스텀마이징 할수있다.
//nextjs page들은 마크업 정의를 건너뛰기 떄문에 html head body가 필요하면 이 파일을 만들어야한다.
//그래야지 이 부분들을 수정할 수 있다.
//server에서만 렌더링되고 onclcik 같은 이벤트 핸들러 작동 x css x
//document Head와 app Head는 다름
