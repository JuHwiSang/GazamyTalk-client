import styled from "styled-components";
import waveImg from "./images/wave.png";
import ImgFriend from "./images/profile.png"
import css from "./App.css";
import AddFImg from "./images/addFriend.png";
import Notification from "./images/notification.png";

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
const FriendDiv = styled.div`
  background:blue'
  height: 100px;
  width: 200px;
`;

const Nav = styled.nav`
  background-color:#7AE2F2;
  position: absolute;
  width: 300px;
  height: 100vh;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Friend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 30px;
  width: 230px;
  height: 80px;
  border-radius: 3px;
  transition: 0.3s;
  box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
  padding: 10px;

  &:hover{
    transition: 0.3s;
    transform: translateX(10px);
    box-shadow: 0px 10px 20px 10px rgba(24, 24, 31, 0.2);
  }
`;

const FriendDetail = styled.div`
`;

const FriendName = styled.div`
`;

const FriendTxt = styled.div`

`;

const FriendImg = styled.img`
  width: 80px;
  height: 80px;
`;

const AddFriend = styled.div`
  transition: 0.3s;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 281px;
  height: 90px;
  left: 10px;
  bottom: 10px;
  background: #B6F4FF;
  border-radius: 10px;
  &:hover{
    transition: 0.3s;
    background: rgb(238, 252, 255);
    transform: translateY(-5px);
    box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
  }
`;

const AddFriendImg = styled.img`
  position: relative;
  left: 0;
  width: 60px;
  height: 72px;
  padding: 3px;
`;

const AddFriendTxt = styled.div`
`;

const Container = styled.div`

`;

const Box = styled.div`
  position: absolute;
  width: 540px;
  height: 780px;
  left: 480px;
  top: 150px;

  background: #FFFFFF;
  border-radius: 10px;
`;

const FriendList = styled.div`
  position: absolute;
  width: 720px;
  height: 420px;
  left: 1050px;
  top: 150px;

  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Etc = styled.div`
  position: absolute;
  width: 720px;
  height: 330px;
  left: 1050px;
  top: 600px;

  background: #FFFFFF;
  border-radius: 10px;
`;

const NofitiImg = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  right: 30px;
  top: 40px;
  transition: 0.3s;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
&:hover{
  transition: 0.3s;
  box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
  border-radius: 50%; 
}
`;

function Main() {
    return <StyledBody>
        <WaveImg src={waveImg}></WaveImg>
        <Nav>
            <Friend>
                <FriendImg src={ImgFriend}></FriendImg>
                <FriendDetail>
                    <FriendName>김땡떙</FriendName>
                    <FriendTxt>llrleaod asjhkzxv ewakbkjsdf sxiso</FriendTxt>
                </FriendDetail>
            </Friend>
            <Friend>
                <FriendImg src={ImgFriend}></FriendImg>
                <FriendDetail>
                    <FriendName>김땡떙</FriendName>
                    <FriendTxt>llrleaod asjhkzxv ewakbkjsdf sxiso</FriendTxt>
                </FriendDetail>
            </Friend>
            <Friend>
                <FriendImg src={ImgFriend}></FriendImg>
                <FriendDetail>
                    <FriendName>김땡떙</FriendName>
                    <FriendTxt>llrleaod asjhkzxv ewakbkjsdf sxiso</FriendTxt>
                </FriendDetail>
            </Friend>
            <Friend>
                <FriendImg src={ImgFriend}></FriendImg>
                <FriendDetail>
                    <FriendName>김땡떙</FriendName>
                    <FriendTxt>llrleaod asjhkzxv ewakbkjsdf sxiso</FriendTxt>
                </FriendDetail>
            </Friend>
            <Friend>
                <FriendImg src={ImgFriend}></FriendImg>
                <FriendDetail>
                    <FriendName>김땡떙</FriendName>
                    <FriendTxt>llrleaod asjhkzxv ewakbkjsdf sxiso</FriendTxt>
                </FriendDetail>
            </Friend>
            <AddFriend>
                <AddFriendImg src={AddFImg}></AddFriendImg>
                <AddFriendTxt>Click here for more Friend</AddFriendTxt>
            </AddFriend>
        </Nav>
        <Container>
            <Box>

            </Box>
            <FriendList>
                <NofitiImg src={Notification}></NofitiImg>
                <Friend>
                    <FriendImg src={ImgFriend}></FriendImg>
                    <FriendDetail>
                        <FriendName>김땡떙</FriendName>
                        <FriendTxt>llrleaod asjhkzxv ewakbkjsdf sxiso</FriendTxt>
                    </FriendDetail>
                </Friend>
            </FriendList>
            <Etc>

            </Etc>

        </Container>
    </StyledBody>
}

export default Main;