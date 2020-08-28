import React from 'react';
import './style.css';
import Button from '../../components/Button';

const Resultados = () => {
    return(
        <div id="resultados" className="wrapper">
            <div className="textarea-group">
                <label htmlFor="textarea-resultados" className="group-title">Resultados</label>
                <textarea rows="8" id="textarea-resultados" className="group-textarea" type="text"></textarea>
            </div>
            
            <Button text="CONCLUIR"/>
        </div>
    );
}

export default Resultados;