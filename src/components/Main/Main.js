import AboutProject from "./AboutProject/AboutProject";
import "../Main/Main.css";
import News from "./News/News";
import AboutUs from "./AboutUs/AboutUs";
import Newsletter from "./Newsletter/Newsletter";
function Main({news,about, newsletter }) {
    return (
        <main className="main">
            <AboutProject/>
            <News ref={news}/>
            <AboutUs ref={about}/>
            <Newsletter ref={newsletter}/>
        </main>
    )
}

export default Main;
