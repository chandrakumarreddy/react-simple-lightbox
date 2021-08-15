import LightBox from "./components/LightBox";
import "./styles.css";

export default function App() {
  return (
    <LightBox
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
      alt="React Logo"
      Wrapper="span"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
        width="100px"
        height="100px"
        alt="React Logo"
      />
    </LightBox>
  );
}
