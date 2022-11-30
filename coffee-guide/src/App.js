import Coffee from './Api/Coffee';
import IcedCoffee from './Api/IcedCoffee';
import Header from "./Layouts/Header"
import Style from "./Scss/_main.scss"




function App() {
  return (
    <>
      <Header/>
      <Coffee/>
      <IcedCoffee/>
    </>
  );
}

export default App;
