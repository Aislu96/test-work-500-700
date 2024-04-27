import './App.css';
import '../Header/Header'
import Header from "../Header/Header";
// import l from "../../images/Mobile 320.png";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {useRef} from "react";
import Popup from "../Popup/Popup";
function App() {
    const refs = {
        news: useRef(null),
        about: useRef(null),
        newsletter: useRef(null),
    };

    function handleClickButton(e) {
        const name = e.target.attributes.name.value;
        const element = refs[name].current;
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <>
            {/*<img src={l} className="image"/>*/}
            <Header handleClickButton={handleClickButton}/>
            <Main  ref={refs}/>
            <Footer handleClickButton={handleClickButton}/>
            <Popup />
        </>
    );
}

export default App;
