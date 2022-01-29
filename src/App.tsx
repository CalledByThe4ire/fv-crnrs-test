import { Container } from './styles';
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";

function App() {
  return (
    <Container>
      <Header />
      <Basket />
    </Container>
  );
}

export default App;
