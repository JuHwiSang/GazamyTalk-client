import styled from "styled-components";
import AddFImg from "../assets/images/addFriend.png";
import FriendComponent from "./friendComponent.js"

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
const AddFriendImg = styled.img`
  position: relative;
  left: 0;
  width: 60px;
  height: 72px;
  padding: 3px;
`;

const AddFriendTxt = styled.div`
  color: black;
  text-decoration: none;
  font-size: 20px;
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

function friendNav(){
    return <Nav>
    <FriendComponent></FriendComponent>
    <AddFriend>
      <AddFriendImg src={AddFImg}></AddFriendImg>
      <AddFriendTxt><a href="./register">Click here for more Friend</a></AddFriendTxt>
    </AddFriend>
  </Nav>
}


export default friendNav;