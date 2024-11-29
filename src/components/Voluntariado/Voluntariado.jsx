import { Link } from 'react-router-dom';

//ASSETS
import './Voluntariado.css';
import Voluntario from '../../assets/voluntario.svg';
import Lojinha1 from '../../assets/lojinha1.svg';
import Lojinha2 from '../../assets/lojinha2.svg';
import Lojinha3 from '../../assets/lojinha3.svg';

function Voluntariado() {
  return (
    <section id="voluntariado" className="voluntariado">
      <div className="colunas">
        {/* Coluna 1 - Desejo Ser Voluntário */}
        <div className="coluna coluna-desejo-ser-voluntario">
          <h3>DESEJO SER <br /> VOLUNTÁRIO</h3>
          <p className="paragrafo1 destaque-amarelo">SE LIGA NA AGENDA</p>
          <p className="paragrafo2">VENHA FAZER A DIFERENÇA <br /> QUE O MUNDO PRECISA!</p>
          <button>QUERO FAZER PARTE</button>
          <img src={Voluntario} alt="Imagem representando um voluntário" />
        </div>

        {/* Coluna 2 - Time do Bem */}
        <div className="coluna coluna-time-do-bem">
          <h3>TIME DO <br /> BEM</h3>
          <p className="paragrafo1 destaque-roxo">UNIR-SE PELO BEM</p>
          <p className="paragrafo2">
            COM R$10 POR MÊS, VOCÊ AJUDA <br />
            O MOBILIZA AMIGOS A LEVAR <br />
            AMOR E DIVERSÃO PARA AS <br />
            CRIANÇAS.
          </p>
          <button>SAIBA MAIS</button>
        </div>

        {/* Coluna 3 - Nossa Lojinha */}
        <div className="coluna coluna-nossa-lojinha">
          <h3>NOSSA <br /> LOJINHA</h3>
          <p className="paragrafo1 destaque-amarelo">COMPRE E CONTRIBUA</p>
          <div className="imagens-lojinha">
            <img src={Lojinha1} alt="Produto 1 da lojinha" />
            <img src={Lojinha2} alt="Produto 2 da lojinha" />
            <img src={Lojinha3} alt="Produto 3 da lojinha" />
          </div>
          <button>SAIBA MAIS</button>
        </div>
      </div>
    </section>
  );
}

export default Voluntariado;
