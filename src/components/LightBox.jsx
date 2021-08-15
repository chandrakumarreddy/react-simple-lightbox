import styled from "@emotion/styled";
import * as React from "react";

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  z-index: ${({ zIndex }) => zIndex};
`;

const Image = styled.img`
  height: auto;
  width: 100%;
  cursor: pointer;
`;

const LightBox = ({ children, src, alt, Wrapper = "div", zIndex = 100 }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper onClick={toggleIsOpen}>
      {children}
      {isOpen ? (
        <Div onClick={toggleIsOpen} zIndex={zIndex}>
          <Image src={src} alt={alt} />
        </Div>
      ) : null}
    </Wrapper>
  );
};

export default LightBox;
