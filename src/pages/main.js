import Background from "../components/background.js";
import FriendNav from "../components/main/friendNav.js";
import Container from "../components/main/container.js"

function Main() {
  return (
    <Background>
      <FriendNav></FriendNav>
      <Container></Container>
    </Background>
  );
}

export default Main;
