import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
    
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-6">
          <a href="#about" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Whats</a>
          <a href="#skills" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Habilidades</a>
          <a href="#projects" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Projetos</a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Contato</a>
        </div>


      
      {/* Hero Section */}
      <div className="relative bg-gray-800 py-16 px-6 text-center">
  
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-white">Bem-vindo ao Meu Portfólio</h1>
          <p className="mt-2 text-lg text-gray-300">Desenvolvedor Front-End | Criativo | Solucionador de Problemas</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contato
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100"
            >
              Ver Portfólio
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7l7-7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
