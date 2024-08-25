import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import {motion, AnimatePresence} from 'framer-motion';
import { buttonVariant, overlayVariant } from './Variants';
import * as styles from './styles.module.css';

function Projects() {
    const [project, setProject] = useState('');
    const [tablet] = useMediaQuery('(max-width: 800px)');

    const handleMouseEnter = (project) => {
        setProject(project);
    }

    const handleMouseLeave = () => {
        setProject('');
    }

    useEffect(() => {
        console.log(project);
    }, [project])

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                Proyectos
            </h1>
            <button className={styles.contact_button}>
                contactame
            </button>
           <article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('design portfolio')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'design portfolio' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="https://www.figma.com/proto/kQO1exIFkACqGTwwkgi30m/Untitled?node-id=2-4&t=Hh8Atz0ciVkUnq8m-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A4" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Desktop design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="https://www.figma.com/proto/kQO1exIFkACqGTwwkgi30m/Untitled?node-id=2-4&t=Hh8Atz0ciVkUnq8m-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A4" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
               
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('e-learning landing page')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'e-learning landing page' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="https://www.figma.com/proto/gf5DYeKX8HiBvSVB99ucEO/Untitled?node-id=1-3&starting-point-node-id=1%3A3" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Desktop design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="https://www.figma.com/proto/gf5DYeKX8HiBvSVB99ucEO/Untitled?node-id=1-3&starting-point-node-id=1%3A3" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
           
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('todo web app')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'todo web app' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="https://www.figma.com/proto/TOSFf8LCTyo6C5I4zv7sCN/Untitled?node-id=1-31&starting-point-node-id=1%3A31" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Desktop design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="https://www.figma.com/proto/TOSFf8LCTyo6C5I4zv7sCN/Untitled?node-id=1-31&starting-point-node-id=1%3A31" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
              
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('entertainment web app')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'entertainment web app' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="https://www.figma.com/proto/Ktja20jieD0HSPjuuPO7cb/Modern-Crypto-Selling-Website-UI-Design-(Community)?node-id=0-29&t=WE5ssokx09j3w42Z-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Desktop design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="https://www.figma.com/proto/Ktja20jieD0HSPjuuPO7cb/Modern-Crypto-Selling-Website-UI-Design-(Community)?node-id=0-29&t=WE5ssokx09j3w42Z-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
             
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('memory game')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'memory game' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="https://www.figma.com/proto/gxewN637vrnP8QTYs5HIeK/Untitled?node-id=1-6&t=TQBGCOC50buxLcGu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Desktop design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="https://www.figma.com/proto/gxewN637vrnP8QTYs5HIeK/Untitled?node-id=1-6&t=TQBGCOC50buxLcGu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
           
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('art gallery showcase')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'art gallery showcase' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="https://www.figma.com/proto/bjvfUJkTN3OsZub9NujnML/Untitled?node-id=2-13&t=sGYP3NdH8dphoq2F-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A13" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Desktop design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="https://www.figma.com/proto/bjvfUJkTN3OsZub9NujnML/Untitled?node-id=2-13&t=sGYP3NdH8dphoq2F-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A13" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
               
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('art gallery showcase')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'art gallery showcase' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="https://www.figma.com/proto/TWLV63XF5RieHjVsTfO8WZ/Untitled?node-id=1-204&t=FaN6vOuKFFJSBpx1-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A155" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Desktop design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="https://www.figma.com/proto/TWLV63XF5RieHjVsTfO8WZ/Untitled?node-id=1-204&t=FaN6vOuKFFJSBpx1-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A155" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
               
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('art gallery showcase')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'art gallery showcase' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="https://www.figma.com/proto/GzFP3y3u89pH8GypYfLktj/Untitled?t=FaN6vOuKFFJSBpx1-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-115&starting-point-node-id=1%3A2&show-proto-sidebar=1" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Desktop design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="https://www.figma.com/proto/GzFP3y3u89pH8GypYfLktj/Untitled?t=FaN6vOuKFFJSBpx1-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-115&starting-point-node-id=1%3A2&show-proto-sidebar=1" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
              
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('art gallery showcase')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'art gallery showcase' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="/art-gallery-showcase" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Mobile design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="/art-gallery-showcase" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
            
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('art gallery showcase')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'art gallery showcase' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="/art-gallery-showcase" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Mobile design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="/art-gallery-showcase" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
             
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('art gallery showcase')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'art gallery showcase' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="/art-gallery-showcase" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Mobile design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="/art-gallery-showcase" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
              
            </button>
        </div>
    )}
</article>

<article className={styles.project}>
    <div
        className={styles.project_image}
        onMouseEnter={() => handleMouseEnter('art gallery showcase')}
        onMouseLeave={handleMouseLeave}
    >
        <img alt="Project Thumbnail" />
        <AnimatePresence>
            {project === 'art gallery showcase' && (
                <motion.div
                    className={styles.overlay}
                    initial="hide"
                    animate="show"
                    exit="exit"
                    variants={overlayVariant}
                >
                    <div className={styles.content}>
                        <motion.button variants={buttonVariant}>
                            <Link className={styles.content} to="/art-gallery-showcase" target="_blank">
                            Ver Proyecto
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    <h2>Mobile design</h2>
    <div className={styles.project_tech}>
        <p>Figma</p>
        <p>Photoshop</p>
        <p>illustrator</p>
    </div>
    {tablet && (
        <div className={styles.project_buttons}>
            <button>
                <Link className={styles.content} to="/art-gallery-showcase" target="_blank">
                Ver Proyecto
                </Link>
            </button>
            <button>
               
            </button>
        </div>
    )}
</article>



        </section>  
    )
}

export default Projects;