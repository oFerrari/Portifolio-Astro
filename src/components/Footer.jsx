import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 px-20">
      <div className="flex items-center justify-end">
        {/* Texto do rodapé */}
        
        <ul className="flex space-x-4">
          <li>
            <a
              href="#about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              aria-current="page"
            >
              Sobre Mim
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
