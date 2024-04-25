import AboutProject from "./AboutProject/AboutProject";
import "../Main/Main.css";
import News from "./News/News";
import AboutUs from "./AboutUs/AboutUs";
function Main() {
    return (
        <main className="main">
            <AboutProject/>
            <News />
            <AboutUs />
        </main>
    )
}

export default Main;
