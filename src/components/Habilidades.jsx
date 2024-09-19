import React from 'react';
import { Card } from './Card'; // Ajuste o caminho conforme necessário

const Habilidades = () => {
    return (
        <section id="skills" className="py-8 bg-gray-900 text-gray-300">
            <div className="px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center my-8 text-white">Habilidades</h1>
                <ul className="list-disc list-inside text-lg leading-relaxed leading-10">
                    <li>Desenvolvimento Web com  Oracle Apex, Angular, React</li>
                    <li>Programação em Java, JavaScript e TypeScript</li>
                    <li>Uso de Framewoks como Angular, Ionic e Spring</li>
                    <li>Experiência com bancos de dados SQL (Oracle, MySQL e PostgreSQL)</li>
                    <li>Boas práticas de design de software e arquitetura de sistemas</li>
                </ul>
            </div>
            
        </section>
    );
};

export default Habilidades;
