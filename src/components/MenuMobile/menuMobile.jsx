export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    if (!menuIsVisible) return null;
  
    return (
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        right: 0, 
        width: '70%', 
        height: '100%', 
        background: '#fff', 
        boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.3)', 
        padding: '1rem', 
        zIndex: 1000 
      }}>
        <button onClick={() => setMenuIsVisible(false)}>
          ✖ Fechar Menu
        </button>
        <nav>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/about">Quem Somos</a></li>
            <li><a href="/donations">Doações</a></li>
            <li><a href="/register">Inscrições</a></li>
            <li><a href="/contact">Contatos</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  