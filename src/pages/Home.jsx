import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import Banner from "../components/Banner/Banner";
import Voluntariado from "../components/Voluntariado/Voluntariado";

function Home() {
    return (
        <>
            <Header />
            <Button buttonStyle="outline">Olá</Button>
            <div className="home"> 
                <Banner title="Doacoes" image="volunteer-background.svg"/>
            </div>
            <Voluntariado />
            <Footer />
        </>
    );
}

export default Home;
