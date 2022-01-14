import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function About() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ display: "block", width: 60 }}
          />
        </div>
        <Header as="h1">Hello</Header>
      </div>
      <Gnb />
    </div>
  );
}
//퍼블릭 img 불러오기 /images/log.png
