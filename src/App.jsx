import "./App.css";
import Backclr from "./components/Back-clr/Back-clr";
import NavBar from "./components/NavBar/NavBar";
import Navigate from "./components/Navigate/Navigate";
import MainPart from "./components/MainPart/MainPart";
import ChoiseOption from "./components/ChoiseOption/ChoiseOption";
import Map from "./components/Map/Map";
import Online from "./components/Online/Online";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Backclr>
        <NavBar />
        <Navigate />
        <MainPart />
        <ChoiseOption/>
        <Map/>
        <Online/>
        <Footer/>
      </Backclr>
    </>
  );
}

export default App;
