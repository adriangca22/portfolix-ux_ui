import React from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterMessage from './EnterMessage';
import * as styles from './styles.module.css';

function Form() {
    return(
        <form className={styles.container}>
            <EnterName/>
            <EnterEmail/>
            <EnterMessage/>
            <button className={styles.submit}>
             Enviar mensaje
            </button>
        </form>
    )
}

export default Form;