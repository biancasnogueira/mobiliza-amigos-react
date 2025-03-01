import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Voluntariado from "../components/Voluntariado/Voluntariado";
import AboutUs from "../components/AboutUs/AboutUs";

function Home() {
    return (
        <>
            <Header />
            <div className="home"> 
                <Banner title="Doacoes" image="volunteer-background.svg"/>
            </div>
            <Voluntariado />
            <AboutUs />
            <Footer />
        </>
    );
}

export default Home;
