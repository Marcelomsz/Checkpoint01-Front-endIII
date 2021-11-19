/* eslint-disable jsx-a11y/alt-text */
import './style.scss';
import React from 'react';

const Cards = () => {
const projetos = [{"id": 1, "titulo":"Jogo Da Memoria",
"imagem": "https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/258548147_4923751477655393_6363885834783622722_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeFPN625dAIrmZYNl8dUSyS8npnETJHLFGKemcRMkcsUYiHgBlddMktLKgEDOxizIqZnNUCY4qtoyKCIZkvOvNiv&_nc_ohc=3DSaarEx2MkAX-S700N&_nc_ht=scontent.fcgh10-1.fna&oh=f57602e6ba8e1d4037375e0c93b5388c&oe=619C4720",
"link": "https://github.com/Checkpoint-01-FE-II/form","icone":"https://cdn-icons-png.flaticon.com/512/25/25231.png","link2": "https://checkpoint-01-fe-ii.github.io/form/" ,"icone2":"https://cdn-icons-png.flaticon.com/512/117/117999.png"},
{"id": 2, "titulo":"Sudaca Filmes","imagem": "https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/259127500_4926719157358625_5731864665742996596_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeFbfMWCZ-vuv3xlQtkH21DiQ3Sic15VzU9DdKJzXlXNT7u-iGBWIIh7NfY2ApC1tmBd33oznU1YUvuGH7H363RQ&_nc_ohc=aBBkFqV4nDQAX_Pltsj&_nc_ht=scontent.fcgh10-1.fna&oh=6a6cc7bc571a7b6704cd16b44f83e093&oe=619C80E3",
"link": "https://github.com/Marcelomsz/dh-frontend-sudaca" , "icone":"https://cdn-icons-png.flaticon.com/512/25/25231.png" ,"link2": "https://thaysgama.github.io/dh-frontend-sudaca/" ,"icone2":"https://cdn-icons-png.flaticon.com/512/117/117999.png"},
{"id": 3,"titulo":"Lista",
"imagem": "https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/258751615_4923868754310332_7175530803791580442_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeFrb5XhmK9QFREpvRLzFf3F4QG2qOON0UvhAbao443RS1z1zXiXyt5d6NYade3EfXsQCIZtYVHaLNi5WDfc4BUg&_nc_ohc=W9alwqKuE_EAX_aeXCI&_nc_ht=scontent.fcgh10-1.fna&oh=7d354c84ca608a9c5b5c0f5c205ac7e1&oe=619CA716",
"link": "https://github.com/ProjetoFrontII-To-do/To-do","icone":"https://cdn-icons-png.flaticon.com/512/25/25231.png" , "link2": "https://projetofrontii-to-do.github.io/To-do/" ,"icone2":"https://cdn-icons-png.flaticon.com/512/117/117999.png"}];

return (
    <ul>
    { projetos.map( (projeto) => <div id='cardmae'>
        <div id ="card" key={ projeto.id }><img id="imagem" src={projeto.imagem}></img>
        <div id="teste">
        <h3>{projeto.titulo}</h3>
        <a href={projeto.link}><img id="icon" src ={projeto.icone}/></a>
        <a href={projeto.link2}><img id="icon" src ={projeto.icone2}/></a>
        </div> 
        </div>
        </div>) }
    </ul>
    );
}

export default Cards;