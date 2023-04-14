import waveImg from "../assets/images/wave.png";
import styled from "styled-components";

const WaveImg = styled.img`
  height:100vh;
  width: 100vw;
`;

const StyledBody = styled.body`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: #DDF9FF80;
  margin: 0;
  padding: 0;
`;


function background(props){
    return<StyledBody>
    <WaveImg src={waveImg}></WaveImg>
    {props.children}
    </StyledBody>
}

export default background;