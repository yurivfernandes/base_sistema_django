import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header/Header';
import './WelcomePage.css';
import { 
  FaUserCog, 
  FaKey, 
  FaWarehouse, 
  FaClipboardCheck, 
  FaExclamationTriangle 
} from 'react-icons/fa';

function WelcomePage() {
  const { user } = useAuth();

  useEffect(() => {
    document.title = 'GesTri | Home';
  }, []);

  const cards = [
    {
      title: 'Perfil',
      description: 'Gerencie suas informações pessoais e configurações da conta',
      active: true,
      icon: <FaUserCog size={32} />,
      subItems: [
        { name: 'Alterar Senha', icon: <FaKey size={16} />, path: '/perfil/senha' }
      ]
    },
    {
      title: 'Inventário',
      description: 'Gerencie clientes, sites, equipamentos e serviços',
      active: true,
      icon: <FaWarehouse size={32} />,
      subItems: [
        { name: 'Acessar Inventário', icon: <FaClipboardCheck size={16} />, path: '/inventario' }
      ]
    },
    {
      title: 'Gestão de Incidentes',
      description: 'Gerencie ocorrências e indisponibilidades',
      active: true,
      icon: <FaExclamationTriangle size={32} />,
      subItems: [
        { name: 'Gerenciar Incidentes', icon: <FaExclamationTriangle size={16} />, path: '/incidentes' }
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="welcome-container">
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <header className="welcome-header">
          <h1>Bem-vindo ao GesTri!</h1>
          <p className="welcome-subtitle">
            Selecione uma das opções abaixo para começar sua jornada
          </p>
        </header>
        
        <main className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <div className="card-header">
                  <div className="card-icon">{card.icon}</div>
                  <h2>{card.title}</h2>
                </div>
                <p>{card.description}</p>
                {card.subItems && (
                  <ul className="sub-items">
                    {card.subItems.map((item, i) => (
                      <li key={i}>
                        <Link to={item.path}>
                          <span className="sub-item-icon">{item.icon}</span>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export default WelcomePage;
