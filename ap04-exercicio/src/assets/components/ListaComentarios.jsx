import React from 'react';
import Card from './Card';
import BotoesAcao from './BotoesAcao';

// Usando URLs de imagens públicas em vez de importações locais
const avatar1 = "https://randomuser.me/api/portraits/women/44.jpg";
const avatar2 = "https://randomuser.me/api/portraits/men/35.jpg";

const ListaComentarios = () => {
    const comentarios = [
        {
            id: 1,
            autor: 'Mary_Lockman69',
            avatar: avatar1,
            data: '8/10 às 17h',
            texto: 'Tempora et rerum cupsa vel flio. Quis velit esse. Quaerat sint optio voluptas quam autem dolorem et cumque. Ad eum voluptas ratione tempore doloribus consequatur atque. Quis ratione itaque quam temporibus enim pariatur. Asperiores aut numquam et perferendis voluptatem aliquam.'
        },
        {
            id: 2,
            autor: 'Brock_Reichel18',
            avatar: avatar2,
            data: '7/10 às 14h',
            texto: 'Quia reiciendis dolor est vel beatae sunt corporis repudiandae. Consequatur enim ut et blanditiis. Quisquam modi error ullam dolores rerum eius. Doloribus neque et cupiditate dolores. Debitis eliquid maxime dignissimos fugiat quis ab quia ratione ut. Omnis vel omnis sint ut officia sint dolor animi et.'
        },
        {
            id: 3,
            autor: 'Usuário_Exemplo',
            avatar: avatar1,
            data: '6/10 às 10h',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel magna vitae purus efficitur tempor. Sed eu orci mi. Nulla facilisi. Donec auctor, eros id tincidunt vestibulum, velit ipsum scelerisque ex, nec volutpat magna ipsum in enim.'
        }
    ];

    return (
        <div className="lista-comentarios">
            <h2 className="text-center mb-4">Comentários Recentes</h2>
            {comentarios.map(comentario => (
                <Card 
                    key={comentario.id}
                    autor={comentario.autor}
                    avatar={comentario.avatar}
                    data={comentario.data}
                    acoes={<BotoesAcao />}
                >
                    <p>{comentario.texto}</p>
                </Card>
            ))}
        </div>
    );
};

export default ListaComentarios; 