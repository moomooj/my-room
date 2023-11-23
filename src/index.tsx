import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import styled, { createGlobalStyle } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";

const GolbalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body,
html
{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0b165943
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
#root{
  width: 100%;
  height: 100%;
}
.r3f
{
    touch-action: none;
}

`;
const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
`;
const WorkDate = styled.div`
  position: absolute;
  bottom: 2%;
  right: 5%;
`;
const NameTag = styled.div`
  position: absolute;
  top: 2%;
  left: 5%;
  font-size: 15px;
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 2%;
  left: 5%;
  font-size: 15px;
`;

const OverLay = () => {
  return (
    <Wrap>
      <Copyright>
        <br />
        Myroom
      </Copyright>
      <NameTag>Ju</NameTag>
      <WorkDate>2023/11/23</WorkDate>
    </Wrap>
  );
};

const Progress = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #fff;
`;

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <Progress>{`${progress.toFixed()}%`}</Progress>
    </Html>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RecoilRoot>
      <OverLay />
      <GolbalStyle />
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 35,
          near: 1,
          far: 100,
        }}
        gl={{
          alpha: true,
        }}
      >
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Canvas>
    </RecoilRoot>
  </>
);
