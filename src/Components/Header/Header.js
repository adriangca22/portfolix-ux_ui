import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.module.css';
import icons from './icons';

function Header() {
    const [title, setTitle] = useState("");
    const fullTitle = "¡Un placer conocerte! Soy Adrian Gonzalez";

    useEffect(() => {
        let index = 0;

        const typingEffect = () => {
            const interval = setInterval(() => {
                setTitle(fullTitle.slice(0, index));
                index++;
                if (index > fullTitle.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        index = 0;
                        typingEffect();
                    }, 9000); // Pausa de 5 segundos antes de repetir
                }
            }, 150);
        };

        typingEffect();

        return () => clearInterval(typingEffect);
    }, []);

    return (
        <header className={styles.container}>
            <strong>
                AdrianDesign.
            </strong>
            <ul className={styles.social_links}>
                <li className={styles.social_link}>
                    <Link to="https://github.com/adriangca22" target='_blank'>
                        <div style={{ width: '100%', height: '100%', opacity: 0 }}></div>
                    </Link>
                </li>
                <li className={styles.social_link}>
                    <Link to="https://www.facebook.com/profile.php?id=100006978871971">
                        <div style={{ width: '100%', height: '100%', opacity: 0 }}></div>
                    </Link>
                </li>
                <li className={styles.social_link}>
                    <Link to="https://www.linkedin.com/in/adrian-gonzalez-6257aa204/">
                        <div style={{ width: '100%', height: '100%', opacity: 0 }}></div>
                    </Link>
                </li>
                <li className={styles.social_link}>
                    <Link to="https://x.com/ArttAdrian">
                        <div style={{ width: '100%', height: '100%', opacity: 0 }}></div>
                    </Link>
                </li>
            </ul>
            <section className={styles.content}>
                <h1 className={styles.typing}>
                    {title}
                </h1>
                <p>
                    "Como desarrollador front-end apasionado por la creación de aplicaciones web,
                    tengo el deber de transformar ideas en interfaces intuitivas y visualmente impactantes. Diseño
                    experiencias web excepcionales que combinan funcionalidad y estética, conectando profundamente con los usuarios."
                </p>
                <button>
                    Contactame
                </button>
            </section>
            <div className={styles.image_container}>
                <div className={styles.profile_image}></div> {/* Cambia a div para aplicar el fondo */}
                <img className={styles.circle} src={icons['circle']} alt="Circle" />
            </div>
            <img className={styles.rings} src={icons['rings']} alt="Rings" />
        </header>
    );
}

export default Header;
