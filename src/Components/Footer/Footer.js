import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import * as styles from './styles.module.css';

// Necesito trabajar en la capacidad de respuesta de este componente
function Footer() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>
                    Contactame
                </h1>
                <p>
                Me encantaría saber sobre su proyecto y cómo podría ayudarlo. Por favor,
                f rellene el formulario y me pondré en contacto con usted lo antes posible.
                </p>
                <Form />
                <div className={styles.line}></div>
                <h2>
                   AdrianDesign.
                </h2>
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
            </div>
        </section>
    );
}

export default Footer;
