import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <ul className="flex space-x-4 ml-auto">
          <li><a href="#about" className="hover:text-gray-400">Sobre Mim</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Habilidades</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projetos</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contato</a></li>
        </ul>
      <p>&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
