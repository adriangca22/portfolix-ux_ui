import React, {useState} from 'react';
import icons from '../icons';
import * as styles from './styles.module.css';

function EnterEmail() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleEmail = (e) => {
        e.target.setCustomValidity('');
        setError('');
        setEmail(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const invalid = e.target.validity.typeMismatch;

        if(isEmpty)
            setError('empty');
        else if(invalid)
            setError('invalid');
    }

    const handleInvalid = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        e.target.setCustomValidity(' ');

        if(isEmpty)
            setError('empty');
        else
            setError('invalid')
    }

    return(
        <fieldset className={styles.container}>
            <input 
                type='email' 
                className={styles.input}
                style={error ? {borderColor: '#FF6F5B'} : {}}
                value={email}
                name='email'
                onChange={handleEmail}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                placeholder='EMAIL'
                required
                />
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

export default EnterEmail;