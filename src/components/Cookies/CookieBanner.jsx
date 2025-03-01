import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Cookies/CookieBanner.css'

export default function CookieBanner() {
    const [cookiesAceitos, setCookiesAceitos] = useState(false);
    const [cookiesRecusados, setCookiesRecusados] = useState(false);

    useEffect(() => {
        const cookieSalvo = document.cookie.includes("aceitouCookies=true");
        const cookieRecusado = document.cookie.includes("recusouCookies=true");
        setCookiesAceitos(cookieSalvo);
        setCookiesRecusados(cookieRecusado);
    }, []);

    const aceitarCookies = () => {
        document.cookie = "aceitouCookies=true; path=/; max-age=31536000"; // 1 ano
        setCookiesAceitos(true);
    };

    const recusarCookies = () => {
        document.cookie = "recusouCookies=true; path=/; max-age=31536000"; // 1 ano
        setCookiesRecusados(true);
    };

    if (cookiesAceitos || cookiesRecusados) return null; // Se já aceitou ou recusou, não exibe o banner

    return (
        <div className="cookie-banner">
            <p>Este site usa cookies para melhorar sua experiência. <Link to="/cookie-policy">Saiba mais</Link>.</p>
            <button onClick={aceitarCookies}>Aceitar</button>
            <button onClick={recusarCookies} className="close-button">X</button>
        </div>
    );
}
