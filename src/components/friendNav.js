import ImgFriend from "../assets/images/profile.png";
import styled from "styled-components";
import AddFImg from "../assets/images/addFriend.png";

const Nav = styled.nav`
  background-color: #7ae2f2;
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

  &:hover {
    transition: 0.3s;
    transform: translateX(10px);
    box-shadow: 0px 10px 20px 10px rgba(24, 24, 31, 0.2);
  }
`;

const FriendDetail = styled.div``;

const FriendName = styled.div``;

const FriendTxt = styled.div``;

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
  background: #b6f4ff;
  border-radius: 10px;
  &:hover {
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


function friendNav(){
    return <Nav>
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
}


export default friendNav;