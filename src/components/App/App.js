import './App.css';
import '../Header/Header'
import Header from "../Header/Header";
import l from "../../images/Pop-up Mobile.png";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {useRef, useState} from "react";
import Popup from "../Popup/Popup";
function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const refs = {
        news: useRef(null),
        about: useRef(null),
        newsletter: useRef(null),
    };

    function handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup')) {
            setIsPopupOpen(false);
        }
    }
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
            <Header onClickPopupOpen={setIsPopupOpen} handleClickButton={handleClickButton} popup={isPopupOpen}/>
            <Main  ref={refs}/>
            <Footer handleClickButton={handleClickButton}/>
            <Popup popup={isPopupOpen} onClickPopupOpen={setIsPopupOpen} onClickOverlay={handleOverlayClose}/>
        </>
    );
}

export default App;
