import { Link } from "react-router-dom";

//ASSETS
import "./Voluntariado.css";
import Voluntario from "../../assets/voluntario.webp";
import Lojinha1 from "../../assets/images-loja/lojinha1.svg";
import Lojinha2 from "../../assets/images-loja/lojinha2.webp";
import Lojinha3 from "../../assets/images-loja/lojinha3.webp";

function Voluntariado() {
  return (
    <section id="voluntariado" className="voluntariado">
      <div className="colunas">
        {/* Coluna 1 - Desejo Ser Voluntário */}
        <div className="coluna coluna-desejo-ser-voluntario">
          <h3>
            DESEJO SER <br /> VOLUNTÁRIO
          </h3>
          <p className="destaque-amarelo">SE LIGA NA AGENDA</p>
          <p className="paragrafo2">
            VENHA FAZER A DIFERENÇA <br /> QUE O MUNDO PRECISA!
          </p>
          <Link to="/register">
            <button>QUERO FAZER PARTE</button>
          </Link>
          <img src={Voluntario} alt="Imagem representando um voluntário" />
        </div>

        {/* Coluna 2 - Time do Bem */}
        <div className="coluna coluna-time-do-bem">
          <h3>
            DOA <br /> LEGAL
          </h3>
          <p className="destaque-roxo">UNIR-SE PELO BEM</p>
          <p className="paragrafo2">
            COM R$10 POR MÊS, VOCÊ AJUDA O <br />
            MOBILIZA AMIGOS A LEVAR <br />
            AMOR E ALEGRIA PARA <br />
            CRIANÇAS, IDOSOS E PETS.
          </p>
          <Link to="/donations">
            <button>SAIBA MAIS</button>
          </Link>
        </div>

        {/* Coluna 3 - Nossa Lojinha */}
        <div className="coluna coluna-nossa-lojinha">
          <h3>
            NOSSA <br /> LOJINHA
          </h3>
          <p className="destaque-amarelo">COMPRE E CONTRIBUA</p>
          <div className="imagens-lojinha">
            <img src={Lojinha1} alt="Produto 1 da lojinha" />
            <img src={Lojinha2} alt="Produto 2 da lojinha" />
            <img src={Lojinha3} alt="Produto 3 da lojinha" />
          </div>
          <a
            href="https://wa.me/5519995022463?text=Olá%20Mobiliza,%20gostaria%20de%20saber%20mais%20sobre%20o%20catálogo%20da%20lojinha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link to="/loja">
            <button>SAIBA MAIS</button>
          </Link>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Voluntariado;
