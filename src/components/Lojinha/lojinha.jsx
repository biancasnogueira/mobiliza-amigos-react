import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import "./Lojinha.css";

// ASSETS
import garrafinhaAmorExiste from "../../assets/images-loja/garrafinha-amor-existe.webp";
import camisetaAmorExistePretaColorida from "../../assets/images-loja/camiseta-preta-colorida-amor-existe-amor-existe.webp";
import camisetaAmorExistePretaBranca from "../../assets/images-loja/camiseta-preta-branco-amor-existe.webp";
import canecaPromocional from "../../assets/images-loja/caneca-promocional.webp";
import camisetaPilaresPretaColorida from "../../assets/images-loja/camiseta-preta-colorida-4pilares.webp";
import camisetaSejaOLadoBomAmarelo from "../../assets/images-loja/camiseta-amarela-seja-o-lado-bom.webp";
import moletomCarecaPretoBranco from "../../assets/images-loja/moletom-gola-careca-preto-branco-4-pilares.webp";
import camisetaPilaresBrancaPreto from "../../assets/images-loja/camiseta-branca-com-preto-4pilares.webp";
import moletomCanguruPretoBranco from "../../assets/images-loja/moletom-canguru-preto-4-pilares.webp";
import croppedPilaresPretoColorido from "../../assets/images-loja/cropped-4-pilares-colorido.webp";
import croppedPilaresPretoBranco from "../../assets/images-loja/cropped-4-pilares-branco.webp";
import camisetaPilaresPretoBranco from "../../assets/images-loja/camiseta-preta-com-branco-4pilares.webp";
import canecaPilaresColorida from "../../assets/images-loja/caneca-colorida-4-pilares.webp";
import canecaPilaresBranca from "../../assets/images-loja/caneca-branca-4-pilares.webp";
import canecaAmorQueCresceColorida from "../../assets/images-loja/caneca-colorida-amor-que-cresce.webp";
import canecaAmorQueCresceBranca from "../../assets/images-loja/caneca-branca-amor-que-cresce.webp";
import garrafinhaPilares from "../../assets/images-loja/garrafinha-4-pilares.webp";
import chaveiroPilaresBranco from "../../assets/images-loja/chaveiro-branco-4-pilares.webp";
import chaveiroPilaresPreto from "../../assets/images-loja/chaveiro-preto-4-pilares.webp";
import chaveiroAmorQueCresce from "../../assets/images-loja/chaveiro-amor-que-cresce.webp";
import chaveiroSejaOLadoBomVerde from "../../assets/images-loja/chaveiro-seja-o-lado-bom-verde.webp";
import chaveiroSejaOLadoBomRoxo from "../../assets/images-loja/chaveiro-seja-o-lado-bom-roxo.webp";
import chaveiroSejaOLadoBomAmarelo from "../../assets/images-loja/chaveiro-seja-o-lado-bom-amarelo.webp";
import camisetaAmorExisteBrancaPreta from "../../assets/images-loja/camiseta-branca-preta-amor-existe.webp";
import camisetaAmorExisteBrancaColorida from "../../assets/images-loja/camiseta-branca-colorida-amor-existe.webp";

const products = [
  {
    id: 1,
    category: "Garrafinhas",
    name: "Garrafinha Amor Existe",
    currentPrice: "R$35.00",
    oldPrice: null,
    description:
      "💧 Leve o amor para onde você for! Esta garrafinha é perfeita para manter-se hidratado enquanto espalha amor e solidariedade. 🌈",
    bestseller: true,
    images: [garrafinhaAmorExiste],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 2,
    category: "Camisetas",
    name: "Camiseta - O Amor Existe - Preta com Colorido",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Vista a solidariedade! Esta camiseta é confeccionada com material de alta qualidade, estilosa e confortável. Ao comprar, você apoia o projeto 'Mobiliza Amigos'. 💛",
    bestseller: true,
    images: [camisetaAmorExistePretaColorida],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 3,
    category: "Camisetas",
    name: "Camiseta - O Amor Existe - Preta com Branco",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Estilo e propósito andam juntos! Esta camiseta é perfeita para quem quer conforto e um visual moderno enquanto apoia uma causa incrível. ✨",
    bestseller: false,
    images: [camisetaPilaresPretoBranco],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 4,
    category: "Camisetas",
    name: "Camiseta - O Amor Existe - Branca com Preto",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Simplicidade e significado! Esta camiseta branca com detalhes em preto é ideal para quem quer vestir a solidariedade com estilo. ❤️",
    bestseller: false,
    images: [camisetaAmorExisteBrancaPreta],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 5,
    category: "Chaveiros",
    name: "Chaveiro Seja O Lado Bom - Verde 🌟",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "🔑 Leve uma mensagem de positividade com você! Este chaveiro verde é perfeito para presentear ou para lembrar de sempre escolher o lado bom da vida. 🌿",
    bestseller: false,
    images: [chaveiroSejaOLadoBomVerde],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 6,
    category: "Chaveiros",
    name: "Chaveiro Seja O Lado Bom - Roxo 🌟",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "🔑 Um toque de inspiração no seu dia a dia! Este chaveiro roxo é ideal para quem quer espalhar amor e positividade por onde passar. 💜",
    bestseller: false,
    images: [chaveiroSejaOLadoBomRoxo],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 7,
    category: "Chaveiros",
    name: "Chaveiro Seja O Lado Bom - Amarelo 🌟",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "🔑 Ilumine seu dia com este chaveiro amarelo! Uma mensagem de otimismo e amor para você ou para presentear alguém especial. 🌞",
    bestseller: false,
    images: [chaveiroSejaOLadoBomAmarelo],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 8,
    category: "Canecas",
    name: "Promoção - Caneca Seja o Lado Bom",
    currentPrice: "R$50.00",
    oldPrice: "R$65.00",
    description:
      "☕📢 Promoção imperdível! Adquira duas canecas exclusivas e ajude o projeto 'Mobiliza Amigos'. Perfeitas para começar o dia com amor e solidariedade. 💛",
    bestseller: true,
    images: [canecaPromocional],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 9,
    category: "Canecas",
    name: "Caneca 4 Pilares",
    currentPrice: "R$25.00",
    oldPrice: "R$34.00",
    description:
      "🌟 Desperte seu espírito solidário com nossa linda caneca! Com os 4 pilares da fé, amor, respeito e união estampados, ela é perfeita para lembrar que juntos podemos fazer a diferença. 💪",
    bestseller: false,
    images: [canecaPilaresBranca],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 10,
    category: "Canecas",
    name: "Caneca 4 Pilares - Colorida",
    currentPrice: "R$30.00",
    oldPrice: "R$40.00",
    description:
      "🌟 Uma explosão de cores e significado! Esta caneca colorida traz os 4 pilares do Mobiliza: fé, amor, respeito e união. Ideal para quem quer inspirar e ser inspirado. 🌈",
    bestseller: false,
    images: [canecaPilaresColorida],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 11,
    category: "Moletons",
    name: "Moletom Gola Redonda Unissex - 4 Pilares",
    currentPrice: "R$90.00",
    oldPrice: null,
    description:
      "🧥 Conforto com propósito! Este moletom unissex é perfeito para os dias mais frios, mantendo você aquecido e estiloso enquanto apoia uma causa incrível. 💛💜",
    bestseller: false,
    images: [moletomCarecaPretoBranco],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 12,
    category: "Moletons",
    name: "Moletom com Capuz - 4 Pilares",
    currentPrice: "R$100.00",
    oldPrice: null,
    description:
      "🧥 Estilo e conforto em um só lugar! Este moletom com capuz é ideal para quem quer se aquecer com propósito e ajudar o projeto 'Mobiliza Amigos'. ❄️💛",
    bestseller: false,
    images: [moletomCanguruPretoBranco],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 13,
    category: "Moletons",
    name: "Moletom Cropped - 4 Pilares Preto com Colorido",
    currentPrice: "R$100.00",
    oldPrice: null,
    description:
      "🧥 Moderno e cheio de significado! Este moletom cropped é perfeito para quem quer um visual descolado enquanto apoia uma causa incrível. 🌟",
    bestseller: false,
    images: [croppedPilaresPretoColorido],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 14,
    category: "Moletons",
    name: "Moletom Cropped - 4 Pilares Preto com Branco",
    currentPrice: "R$100.00",
    oldPrice: null,
    description:
      "🧥 Estilo e propósito em um só look! Este moletom cropped é ideal para quem quer um visual moderno e cheio de significado. 💥",
    bestseller: false,
    images: [croppedPilaresPretoBranco],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 15,
    category: "Camisetas",
    name: "Camiseta 4 Pilares - Branca",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Vista com propósito! Esta camiseta branca simboliza os pilares do Mobiliza: fé, amor, respeito e união. Perfeita para quem quer vestir uma causa. 💪",
    bestseller: false,
    images: [camisetaPilaresBrancaPreto],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 16,
    category: "Camisetas",
    name: "Camiseta 4 Pilares - Preta com Colorido",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Estilo e significado em uma só peça! Esta camiseta preta com detalhes coloridos representa os pilares do Mobiliza e é ideal para quem quer vestir uma causa com atitude. 🌈",
    bestseller: false,
    images: [camisetaPilaresPretaColorida],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 17,
    category: "Camisetas",
    name: "Camiseta Seja o Lado Bom - Amarela",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Vista a solidariedade com esta camiseta amarela vibrante! Ao comprar, você contribui para o projeto voluntariado 'Mobiliza Amigos'. 🌞",
    bestseller: false,
    images: [camisetaSejaOLadoBomAmarelo],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 18,
    category: "Chaveiros",
    name: "Chaveiro - 4 Pilares - Branco",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "🔑 Um toque de inspiração no seu dia a dia! Este chaveiro branco é perfeito para quem quer lembrar dos pilares do Mobiliza: fé, amor, respeito e união. ✨",
    bestseller: false,
    images: [chaveiroPilaresBranco],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 19,
    category: "Chaveiros",
    name: "Chaveiro - 4 Pilares - Preto",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "🔑 Estilo e significado em um pequeno detalhe! Este chaveiro preto é ideal para quem quer carregar consigo os pilares do Mobiliza. 🖤",
    bestseller: false,
    images: [chaveiroPilaresPreto],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 20,
    category: "Canecas",
    name: "Caneca Amor que Cresce e se Multiplica - Colorida",
    currentPrice: "R$20.00",
    oldPrice: "R$34.00",
    description:
      "🌟 Espalhe amor com esta caneca colorida! Perfeita para quem quer começar o dia com uma mensagem de amor e solidariedade. 💖",
    bestseller: false,
    images: [canecaAmorQueCresceColorida],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 21,
    category: "Canecas",
    name: "Caneca Amor que Cresce e se Multiplica",
    currentPrice: "R$20.00",
    oldPrice: "R$34.00",
    description:
      "🌟 Uma caneca cheia de significado! Ideal para quem quer espalhar amor e ajudar o projeto 'Mobiliza Amigos'. 💕",
    bestseller: false,
    images: [canecaAmorQueCresceBranca],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 22,
    category: "Chaveiros",
    name: "Chaveiro - ❤️ Que Cresce e se Multiplica",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "🔑 Um pequeno símbolo de amor! Este chaveiro é perfeito para quem quer carregar consigo uma mensagem de amor e solidariedade. ❤️",
    bestseller: false,
    images: [chaveiroAmorQueCresce],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 23,
    category: "Garrafinhas",
    name: "🌟 Garrafinha 4 Pilares 🌟",
    currentPrice: "R$25.00",
    oldPrice: "R$35.00",
    description:
      "💧 Hidrate-se com propósito! Esta garrafinha é perfeita para quem quer levar consigo os pilares do Mobiliza: fé, amor, respeito e união. 🌟",
    bestseller: false,
    images: [garrafinhaPilares],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 24,
    category: "Camisetas",
    name: "Camiseta - O Amor Existe - Branca Colorida",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Vista a solidariedade com esta camiseta branca e colorida! Ao comprar, você contribui para o projeto 'Mobiliza Amigos'. 🌈",
    bestseller: false,
    images: [camisetaAmorExisteBrancaColorida],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 2,
    category: "Camisetas",
    name: "Camiseta - O Amor Existe - Preta com Branco",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Vista a solidariedade! Esta camiseta é confeccionada com material de alta qualidade, estilosa e confortável. Ao comprar, você apoia o projeto 'Mobiliza Amigos'. 💛",
    bestseller: true,
    images: [camisetaAmorExistePretaBranca],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
];

const categories = [
  "Todos",
  "Camisetas",
  "Canecas",
  "Moletons",
  "Garrafinhas",
  "Chaveiros",
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-images">
      {product.images && product.images.length > 0 ? (
        product.images.map((img, index) => (
          <img src={img} alt={`${product.name} ${index + 1}`} key={index} />
        ))
      ) : (
        <div className="placeholder-image">Insira imagens aqui</div>
      )}
    </div>
    <div className="product-details">
      <h3 className="product-name">{product.name}</h3>
      {product.description && (
        <p className="product-description">{product.description}</p>
      )}
      <div className="product-prices">
        <span className="current-price">{product.currentPrice}</span>
        {product.oldPrice && (
          <span className="old-price">{product.oldPrice}</span>
        )}
      </div>
      <button
        className="buy-button"
        onClick={() => window.open(product.pagbankLink, "_blank")}
      >
        Comprar
      </button>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    currentPrice: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    pagbankLink: PropTypes.string.isRequired,
  }).isRequired,
};

const FilterBar = ({
  selectedCategory,
  handleCategoryChange,
  filterBestsellers,
  handleBestsellerToggle,
}) => (
  <div className="filter-bar">
    <div className="filter-item">
      <label htmlFor="category">Categoria:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
    <div className="filter-item bestseller-filter">
      <label htmlFor="bestsellers">
        <input
          type="checkbox"
          id="bestsellers"
          checked={filterBestsellers}
          onChange={handleBestsellerToggle}
        />
        Mais Vendidos
      </label>
    </div>
  </div>
);

FilterBar.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  filterBestsellers: PropTypes.bool.isRequired,
  handleBestsellerToggle: PropTypes.func.isRequired,
};

const useFilteredProducts = (products, selectedCategory, filterBestsellers) => {
  return useMemo(() => {
    return products.filter((prod) => {
      const categoryMatch =
        selectedCategory === "Todos" || prod.category === selectedCategory;
      const bestsellerMatch = filterBestsellers ? prod.bestseller : true;
      return categoryMatch && bestsellerMatch;
    });
  }, [products, selectedCategory, filterBestsellers]);
};

const Lojinha = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filterBestsellers, setFilterBestsellers] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleBestsellerToggle = (e) => {
    setFilterBestsellers(e.target.checked);
  };

  const filteredProducts = useFilteredProducts(
    products,
    selectedCategory,
    filterBestsellers
  );

  const bestsellers = useMemo(() => {
    return products.filter((prod) => prod.bestseller);
  }, [products]);

  return (
    <div className="lojinha-container">
      <h1>Lojinha do Bem</h1>
      <FilterBar
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        filterBestsellers={filterBestsellers}
        handleBestsellerToggle={handleBestsellerToggle}
      />
      {!filterBestsellers &&
        selectedCategory === "Todos" &&
        bestsellers.length > 0 && (
          <section className="product-section">
            <h2 className="section-title">Mais Vendidos</h2>
            <div className="product-grid">
              {bestsellers.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </section>
        )}
      <section className="product-section">
        <h2 className="section-title">Produtos</h2>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </section>
    </div>
  );
};

export default Lojinha;
