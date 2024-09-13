import React from 'react';

const Projetos = () => {
    return (
        <section id="projects" className="py-8 bg-gray-900 text-gray-300">
            <div className="px-4 max-w-4xl mx-auto">
                <h3 className="text-4xl font-bold mb-6 text-center">Projetos Destacados</h3>
                <div className="mb-6">
                    <h4 className="text-2xl font-semibold mb-2">Sistema de Gerenciamento de Tarefas</h4>
                    <p className="text-justify text-lg leading-relaxed">
                        Desenvolvi um sistema de gerenciamento de tarefas utilizando React para o front-end e Node.js para o back-end. O sistema permite aos usuários criar, editar e excluir tarefas, além de organizar suas atividades em diferentes categorias e visualizar relatórios de produtividade.
                    </p>
                </div>
                <div className="mb-6">
                    <h4 className="text-2xl font-semibold mb-2">Aplicativo de Monitoramento de Desempenho</h4>
                    <p className="text-justify text-lg leading-relaxed">
                        Criei um aplicativo de monitoramento de desempenho usando Python e Flask. O aplicativo coleta dados de desempenho de sistemas e gera relatórios detalhados, ajudando equipes a identificar gargalos e melhorar a eficiência operacional.
                    </p>
                </div>
                <div className="mb-6">
                    <h4 className="text-2xl font-semibold mb-2">Site de E-commerce</h4>
                    <p className="text-justify text-lg leading-relaxed">
                        Trabalhei em um projeto de e-commerce onde desenvolvi o front-end com React e a integração com APIs de pagamento. O site possui uma interface intuitiva e permite aos usuários realizar compras, gerenciar seus pedidos e acompanhar o status de entrega.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projetos;
