import AboutProject from "./AboutProject/AboutProject";
import "../Main/Main.css";
import News from "./News/News";
import AboutUs from "./AboutUs/AboutUs";
import Newsletter from "./Newsletter/Newsletter";
function Main() {
    return (
        <main className="main">
            <AboutProject/>
            <News />
            <AboutUs />
            <Newsletter />
        </main>
    )
}

export default Main;
