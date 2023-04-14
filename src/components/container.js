import styled from "styled-components";
import ImgFriend from "../assets/images/profile.png";
import Notification from "../assets/images/notification.png"
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

  &:hover {
    transition: 0.3s;
    transform: translateX(10px);
    box-shadow: 0px 10px 20px 10px rgba(24, 24, 31, 0.2);
  }
`;

const Container = styled.div``;

const Box = styled.div`
  position: absolute;
  width: 540px;
  height: 780px;
  left: 480px;
  top: 150px;

  background: #ffffff;
  border-radius: 10px;
`;

const FriendList = styled.div`
  position: absolute;
  width: 720px;
  height: 420px;
  left: 1050px;
  top: 150px;

  background: #ffffff;
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

  background: #ffffff;
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
  &:hover {
    transition: 0.3s;
    box-shadow: 0px 0px 20px 1px rgba(61, 61, 75, 0.2);
    border-radius: 50%;
  }
`;

const FriendDetail = styled.div``;

const FriendName = styled.div``;

const FriendTxt = styled.div``;

const FriendImg = styled.img`
  width: 80px;
  height: 80px;
`;

function container(){
    return <Container>
    <Box></Box>
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
    <Etc></Etc>
  </Container>
}

export default container;