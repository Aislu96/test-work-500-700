import './App.css';
import '../Header/Header'
import Header from "../Header/Header";
import l from "../../images/Mobile Menu.png";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {useRef} from "react";
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
            {/*<Footer handleClickButton={handleClickButton}/>*/}
        </>
    );
}

export default App;
