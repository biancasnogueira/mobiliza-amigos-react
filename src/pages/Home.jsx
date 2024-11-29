import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import Banner from "../components/Banner/Banner";

function Home() {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <p>Subtitle</p>
            <Button buttonStyle="outline">Olá</Button>
            <Banner title="Home" image="volunteer-background.svg"/>
            <Footer />
        </>
    );
}

export default Home;
