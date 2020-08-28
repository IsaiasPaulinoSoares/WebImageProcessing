import React from 'react';
import './style.css';

const Dashboard = () => {
    return (
        <div id="dashboard">
            <a href="/" className="wrapper button-wrapper dashboard__btn">
                <i class="fas fa-vial btn__icon"></i>
                <p className="btn__title">Realizar Exame</p>
            </a>

            <a href="/" className="wrapper button-wrapper dashboard__btn">
                <i class="fas fa-wrench btn__icon"></i>
                <p className="btn__title">Configurações</p>
            </a>
        </div>
    );
}

export default Dashboard;