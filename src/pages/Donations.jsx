import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import Banner from "../components/Banner/Banner";

function Donations() {
    return (
        <>
            <Header />
            <main className="donations-page">
                <section className="donations-content">
                    <h1>Faça uma Doação</h1>
                    <p>
                        Ajude-nos a transformar vidas! Sua doação fará uma grande diferença para
                        nossos projetos e para as crianças da região.
                    </p>
                    <Button buttonStyle="outline">Quero Doar</Button>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Donations;
