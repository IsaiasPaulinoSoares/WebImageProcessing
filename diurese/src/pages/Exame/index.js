import React from 'react';
import './style.css';
import Button from '../../components/Button';

import Images from '../../assets/images/image4.png';

const Exame = () => {
    return (
        <div id="exame" className="wrapper">
            <div className="col">
                <div className="input-group">
                    <label htmlFor="input-data" className="group-title">Data do Exame</label>
                    <input id="input-data" className="group-input" type="text"></input>
                </div>

                <div className="input-group">
                    <label htmlFor="input-foto" id="title-foto" className="group-title">
                    Foto do Exame
                    <div id="block-foto" className="group-input">
                        <input id="input-foto" type="file" />
                        <i class="far fa-file-image"></i>
                        <span>Clique aqui para enviar a sua imagem</span>
                    </div>
                    </label>
                </div>
            </div>

            <div className="col box-img">
                <i class="fas fa-image"></i>
                {/* <img src={Images} /> */}
            </div>
            
            <div className="button">
                <Button text="ANALISAR" />
            </div>
        </div>
    );
}

export default Exame;