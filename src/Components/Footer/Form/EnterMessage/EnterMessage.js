import React, {useState} from 'react';
import icons from '../icons';
import * as styles from './styles.module.css';

function EnterMessage() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleMessage = (e) => {
        e.target.setCustomValidity('');
        setError('');
        setMessage(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError('empty');
    }

    return(
        <fieldset className={styles.container}>
            <textarea 
                className={styles.textarea}
                style={error ? {borderColor: '#FF6F5B'} : {}}
                value={message}
                name='message'
                onChange={handleMessage}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                placeholder='MESSAGE'
                required
            ></textarea>
            {error && <img className={styles.error_icon} src={icons['error']}/>}
            {error === 'empty' && 
                <div className={styles.error_message}>
                    Sorry, can't be empty
                </div>}
            {error === 'invalid' && 
                <div className={styles.error_message}>
                    Sorry, invalid format here
                </div>}
        </fieldset>
    )
}

export default EnterMessage;