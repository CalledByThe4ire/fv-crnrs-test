import { Container } from './styles';
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

function App() {
  return (
    <Container>
      <Header />
      <Breadcrumbs />
      <Basket />
    </Container>
  );
}

export default App;
