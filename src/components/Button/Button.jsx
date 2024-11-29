import './Button.css'

function Button({ arrow, buttonStyle, loading, children, ...props }) {
  // Verifica se buttonStyle foi passado, caso contrário, usa uma classe padrão
  const buttonClass = buttonStyle ? `button ${buttonStyle}` : 'button';

  return (
    <button className={buttonClass} {...props}>
      {loading ? 'Carregando...' : children}
      {/* Se houver um ícone de seta, você pode renderizá-lo aqui */}
      {arrow && <span className="arrow">→</span>}
    </button>
  );
}

export default Button;
