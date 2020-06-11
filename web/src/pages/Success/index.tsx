import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';

import './styles.css';

const Sucess = () => {
    return (
        <div className='full-screen'>
            <Link to='/create-point'>
                <FiArrowLeft color='#00b894' size='48px'/>
            </Link>
            <div id='border-red' className='flex-center'>
                <h1 className='title'>Ponto criado com sucesso!</h1>
                <span>
                    <FiCheckCircle color='#00b894' size='48px'/>
                </span>
            </div>
        </div>
    )
}

export default Sucess;