import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      {/* Desktop and Mobile Navigation */}
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-1 lg:flex-none">
          <a href="#" className="flex items-center space-x-2">
            <img
              alt="Company Logo"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold">Andrei Ferrari</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>


        akik

      </nav>

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
              <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
