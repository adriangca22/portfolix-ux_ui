import React from 'react';
import * as styles from './styles.module.css';
import images from './images';

function Skills() {
    return (
        <section className={styles.container}>
            <div className={styles['icon-wrapper']}>
                <img className={styles.icon} src="/images/html.png" alt="HTML Icon" />
                <strong>HTML</strong>
                <em>4 Years Experience</em>
            </div>
            <div className={styles['icon-wrapper']}>
                <img className={styles.icon} src="/images/css.png" alt="CSS Icon" />
                <strong>CSS</strong>
                <em>4 Years Experience</em>
            </div>
            <div className={styles['icon-wrapper']}>
                <img className={styles.icon} src="/images/js.png" alt="JavaScript Icon" />
                <strong>JavaScript</strong>
                <em>4 Years Experience</em>
            </div>
            <div className={styles['icon-wrapper']}>
                <img className={styles.icon} src="/images/figma.png" alt="Figma Icon" />
                <strong>Figma</strong>
                <em>4 Years Experience</em>
            </div>
            <div className={styles['icon-wrapper']}>
                <img className={styles.icon} src="/images/photoshop.png" alt="Photoshop Icon" />
                <strong>Photoshop</strong>
                <em>3 Years Experience</em>
            </div>
            <div className={styles['icon-wrapper']}>
                <img className={styles.icon} src="/images/illustrator.png" alt="Illustrator Icon" />
                <strong>Illustrator</strong>
                <em>3 Years Experience</em>
            </div>
            <img className={styles.rings} src={images['rings']} alt="Rings"/>
        </section>
    );
}

export default Skills;
