import React from 'react';

const Projetos = () => {
    return (
        <section id="projects" className="py-8 bg-gray-800 text-gray-300">
            <div className="px-4 max-w-4xl mx-auto">
                <h3 className="text-4xl font-bold mb-6 text-center">Projetos</h3>
                <div className="mb-6">
                    <h4 className="text-2xl font-semibold mb-2 py-5">Sistema de Gerenciamento de Entregas</h4>
                    <p className="text-justify text-lg leading-relaxed">
                        Desenvolvido com **Angular** no front-end e **Java** com **Spring** no back-end, este sistema permite a gestão eficiente de entregas, integrando APIs para garantir funcionalidade em dispositivos móveis.
                    </p>
                </div>
                {<div tabIndex={0} className="collapse collapse-open border-base-300 border">
                    <div className="collapse-title text-xl font-medium">Link do Projeto</div>
                    <div className="collapse-content">
                        <a href="https://github.com/oFerrari/Pokedex" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline">
                        https://github.com/oFerrari/SGE-Front
                        </a>
                        <p></p>
                        <a href="https://github.com/oFerrari/SGE-Back" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline">
                        https://github.com/oFerrari/SGE-Back
                        </a>
                    </div>
                </div>
                }
                <div className="mb-6">
                    <h4 className="text-2xl font-semibold mb-2 py-5">Jogo da Velha</h4>
                    <p className="text-justify text-lg leading-relaxed">
                        Um jogo interativo criado com **JavaScript**, proporcionando uma experiência divertida e dinâmica para os usuários.
                    </p>
                </div>
                {<div tabIndex={0} className="collapse collapse-open border-base-300 border">
                    <div className="collapse-title text-xl font-medium">Link do Projeto</div>
                    <div className="collapse-content">
                        <a href="https://github.com/oFerrari/Projeto_Jogo_da_Velha" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline">
                        https://github.com/oFerrari/Projeto_Jogo_da_Velha
                        </a>
                    </div>
                </div>
                }
                <div className="mb-6">
                    <h4 className="text-2xl font-semibold mb-2 py-5">Localizador de Perfis</h4>
                    <p className="text-justify text-lg leading-relaxed">
                        Aplicação desenvolvida em **React**, que permite a busca e visualização de perfis de usuários, com uma interface intuitiva e responsiva.
                    </p>
                </div>
                {<div tabIndex={0} className="collapse collapse-open border-base-300 border">
                    <div className="collapse-title text-xl font-medium">Link do Projeto</div>
                    <div className="collapse-content">
                        <a href="https://github.com/oFerrari/APP-Localizador-de-Perfis-React" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline">
                        https://github.com/oFerrari/APP-Localizador-de-Perfis-React
                        </a>
                    </div>
                </div>
                }
                <div className="mb-6">
                    <h4 className="text-2xl font-semibold mb-2 py-5">Site Magic</h4>
                    <p className="text-justify text-lg leading-relaxed">
                        Um projeto de site estático construído com **HTML** e **CSS**, demonstrando habilidades em design e layout.
                    </p>
                </div>
                {<div tabIndex={0} className="collapse collapse-open border-base-300 border">
                    <div className="collapse-title text-xl font-medium">Link do Projeto</div>
                    <div className="collapse-content">
                        <a href="https://github.com/oFerrari/Projeto-Site-Magic" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline">
                        https://github.com/oFerrari/Projeto-Site-Magic
                        </a>
                    </div>
                </div>
                }
                <div className="mb-6">
                    <h4 className="text-2xl font-semibold mb-2 py-5">POKEDEX</h4>
                    <p className="text-justify text-lg leading-relaxed">
                        Uma aplicação simples desenvolvida com **HTML** e **CSS**, que exibe informações sobre diferentes Pokémon, utilizando um design atrativo.
                    </p>
                </div>
                {<div tabIndex={0} className="collapse collapse-open border-base-300 border">
                    <div className="collapse-title text-xl font-medium">Link do Projeto</div>
                    <div className="collapse-content">
                        <a href="https://github.com/oFerrari/Pokedex" target="_blank" rel="noopener noreferrer" className="text-gray-300 underline">
                        https://github.com/oFerrari/Pokedex
                        </a>
                    </div>
                </div>
                }
            </div>
            
        </section>
    );
};

export default Projetos;
