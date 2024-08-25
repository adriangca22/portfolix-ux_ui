import React, {useState} from 'react';
import icons from '../icons';
import * as styles from './styles.module.css';

function EnterName() {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    const handleName = (e) => {
        e.target.setCustomValidity('');
        setError('');
        setName(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError('empty')
    }

    return(
        <fieldset className={styles.container}>
            <input 
                type='text' 
                className={styles.input}
                style={error ? {borderColor: '#FF6F5B'} : {}}
                value={name}
                name='name'
                onChange={handleName}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                placeholder='NAME'
                required
                />
            {error === 'empty' && <img className={styles.error_icon} src={icons['error']}/>}
            {error === 'empty' && 
                <div className={styles.error_message}>
                    Sorry, can't be empty
                </div>}
        </fieldset>
    )
}

export default EnterName;