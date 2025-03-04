import React, { useState, useMemo } from "react";
import "./Lojinha.css";

//ASSETS
import garrafinhaImage from "../../assets/images-loja/garrafinha-amor-existe.webp";
import camisetaAmorExistePretaColorida from "../../assets/images-loja/camiseta-preta-colorida-amor-existe-amor-existe.webp";
import canecaPromocional from "../../assets/images-loja/caneca-promocional.webp";

const products = [
  {
    id: 1,
    category: "Garrafinhas",
    name: "Garrafinha amor existe",
    currentPrice: "R$35.00",
    oldPrice: null,
    description: "",
    bestseller: true,
    images: [garrafinhaImage],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 2,
    category: "Camisetas",
    name: "Camiseta - O Amor Existe - Preta com colorido",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Camiseta da Lojinha do Bem: Vista a solidariedade com esta camiseta! Confeccionada com material de qualidade, estilosa e confortável, ajudando o projeto 'Mobiliza Amigos'.",
    bestseller: true,
    images: [camisetaAmorExistePretaColorida],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 3,
    category: "Camisetas",
    name: "Camiseta - O Amor Existe - Preta com branco",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Camiseta da Lojinha do Bem: Vista a solidariedade com esta camiseta! Conforto e estilo para apoiar o 'Mobiliza Amigos'.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 4,
    category: "Camisetas",
    name: "Camiseta - O Amor Existe - Branca com preto",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Camiseta da Lojinha do Bem: Vista a solidariedade e ajude o projeto 'Mobiliza Amigos'.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 5,
    category: "Chaveiros",
    name: "Chaveiros da Solidariedade 🌟",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "Chaveiros personalizados para todos os gostos. Entrega rápida e garantida!",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 6,
    category: "Canecas",
    name: "Promoção - Caneca Seja o Lado Bom",
    currentPrice: "R$50.00",
    oldPrice: "R$65.00",
    description:
      "📢 Promoção imperdível! Adquira duas canecas exclusivas e ajude o projeto 'Mobiliza Amigos'.",
    bestseller: true,
    images: [canecaPromocional],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 7,
    category: "Canecas",
    name: "Caneca 4 Pilares",
    currentPrice: "R$25.00",
    oldPrice: "R$34.00",
    description:
      "🌟 Desperte seu espírito solidário com nossa linda caneca de projeto voluntariado! Com os 4 pilares da fé, amor, respeito e união estampados, ela é perfeita para lembrar que juntos podemos fazer a diferença.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 8,
    category: "Canecas",
    name: "Caneca 4 Pilares - Colorida",
    currentPrice: "R$30.00",
    oldPrice: "R$40.00",
    description:
      "🌟 Desperte seu espírito solidário com nossa linda caneca de projeto voluntariado! Com os 4 pilares da fé, amor, respeito e união estampados, ela é perfeita para lembrar que juntos podemos fazer a diferença.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 9,
    category: "Moletons",
    name: "Moletom Gola Redonda Unissex - 4 Pilares",
    currentPrice: "R$90.00",
    oldPrice: null,
    description:
      "Conforto com Propósito! 💛💜 Adquira nosso Moletom Gola Redonda Unissex e ajude a fazer a diferença.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 10,
    category: "Moletons",
    name: "Moletom com Capuz - 4 Pilares",
    currentPrice: "R$100.00",
    oldPrice: null,
    description:
      "Conforto com Propósito! 💛💜 Adquira nosso Moletom com Capuz Unissex e ajude a fazer a diferença.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 11,
    category: "Camisetas",
    name: "Camiseta 4 Pilares - Branca",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Camiseta 4 Pilares: Vista com propósito! Essa camiseta simboliza os pilares do Mobiliza: fé, amor, respeito e união.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 12,
    category: "Camisetas",
    name: "Camiseta 4 Pilares - Preta",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Camiseta 4 Pilares: Vista com propósito! Essa camiseta simboliza os pilares do Mobiliza: fé, amor, respeito e união.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 13,
    category: "Camisetas",
    name: "Camiseta Seja o Lado Bom - Amarela",
    currentPrice: "R$30.00",
    oldPrice: "R$50.00",
    description:
      "👕 Camiseta da Lojinha do Bem: Vista a solidariedade com esta camiseta! Ao comprar, você contribui para o projeto voluntariado 'Mobiliza Amigos'.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 14,
    category: "Chaveiros",
    name: "Chaveiro - 4 Pilares - Branco",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "Chaveiros personalizados para todos os gostos. Encontre o chaveiro perfeito para você ou para presentear alguém especial.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 15,
    category: "Chaveiros",
    name: "Chaveiro - 4 Pilares - Preto",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "Chaveiros personalizados para todos os gostos. Encontre o chaveiro perfeito para você ou para presentear alguém especial.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 16,
    category: "Canecas",
    name: "Caneca Amor que Cresce e se Multiplica",
    currentPrice: "R$20.00",
    oldPrice: "R$34.00",
    description:
      "🌟 Caneca 'Amor que Cresce e se Multiplica': Adquira nossa caneca exclusiva da Lojinha do Bem e espalhe amor!",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 17,
    category: "Chaveiros",
    name: "Chaveiro - ❤️ Que Cresce e se Multiplica",
    currentPrice: "R$7.00",
    oldPrice: null,
    description:
      "Chaveiros personalizados para todos os gostos. Encontre o chaveiro perfeito para você ou para presentear alguém especial.",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  {
    id: 18,
    category: "Garrafinhas",
    name: "🌟 Garrafinha 4 Pilares 🌟",
    currentPrice: "R$25.00",
    oldPrice: "R$35.00",
    description:
      "Conheça a Garrafinha 4 Pilares da Lojinha do Bem! Compre e contribua para a nossa causa!",
    bestseller: false,
    images: [],
    pagbankLink: "https://www.pagbank.com.br/checkout",
  },
  // ... (outros produtos)
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
      <a
        className="buy-button"
        href={product.pagbankLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Comprar
      </a>
    </div>
  </div>
);

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

const Lojinha = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filterBestsellers, setFilterBestsellers] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleBestsellerToggle = (e) => {
    setFilterBestsellers(e.target.checked);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const categoryMatch =
        selectedCategory === "Todos" || prod.category === selectedCategory;
      const bestsellerMatch = filterBestsellers ? prod.bestseller : true;
      return categoryMatch && bestsellerMatch;
    });
  }, [selectedCategory, filterBestsellers]);

  const bestsellers = useMemo(() => {
    return products.filter((prod) => prod.bestseller);
  }, []);

  return (
    <div className="lojinha-container">
      <h1>Lojinha do Bem</h1>
      <FilterBar
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        filterBestsellers={filterBestsellers}
        handleBestsellerToggle={handleBestsellerToggle}
      />
      {/* Exibir os "Mais Vendidos" primeiro, se o filtro de categoria não for ativado */}
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
      {/* Exibir os produtos filtrados depois */}
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
