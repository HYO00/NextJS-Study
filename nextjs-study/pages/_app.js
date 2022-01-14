import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Top from "../src/component/Top";
import Footer from "../src/component/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
//여기서 props로 넘어온 컴포넌트는 현재 페이지를 의미
//페이지 전환시 이 컴포넌트 props가 변경된다.
//pageProps는 데이터 패칭 메소드를 통해 미리 가져온 초기 객체 사용하지 않으면 빈객체가 전달
//ex) pageProps 헤더랑 푸터를 넣어보자
export default MyApp;

/**
 * 페이지 전환시 레이아웃을 유지할 수 있다.
 * 페이지 전환시 상태값을 유지할 수 있다.
 * componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
 * 글로벌 CSS를 이곳에 선언한다.
 * 모든 페이지에 적용해야하는 내용은 app에서 사용하자
 * 타이틀같은 속성을 넣을 때 app에서 넣거나 각페이지에서 헤드를 임포트해서 사용
 */
