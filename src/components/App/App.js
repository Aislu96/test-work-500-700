import './App.css';
import '../Header/Header'
import Header from "../Header/Header";
// import l from "../../images/Desktop 1440.png"
import Main from "../Main/Main";
function App() {
    return (
        <>
            {/*<img src={l} className="image"/>*/}
            <Header />
            <Main />
            <Fotter />
        </>
    );
}

export default App;
