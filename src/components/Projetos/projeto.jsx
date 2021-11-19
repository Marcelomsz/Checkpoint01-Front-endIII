/* eslint-disable jsx-a11y/alt-text */
import './style.scss';
import React from 'react';

const Cards = () => {
const projetos = [{"id": 1, "titulo":"Jogo Da Memoria",
"imagem": "https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/258548147_4923751477655393_6363885834783622722_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeFPN625dAIrmZYNl8dUSyS8npnETJHLFGKemcRMkcsUYiHgBlddMktLKgEDOxizIqZnNUCY4qtoyKCIZkvOvNiv&_nc_ohc=3DSaarEx2MkAX-S700N&_nc_ht=scontent.fcgh10-1.fna&oh=f57602e6ba8e1d4037375e0c93b5388c&oe=619C4720",
"link": "https://github.com/Checkpoint-01-FE-II/form","icone":"https://cdn-icons-png.flaticon.com/512/25/25231.png","link2": "https://checkpoint-01-fe-ii.github.io/form/" ,"icone2":"https://cdn-icons-png.flaticon.com/512/117/117999.png"},{"id": 2, "titulo":"CheckpointPooPkm","imagem": "https://s2.glbimg.com/G__W4DCsy-yZXuaT2BbPbmtycnI=/0x0:695x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/l/k/OBsA79Qk62yweE2oDpnA/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg",
"link": "https://github.com/Marcelomsz/CheckpointPooPkm" , "icone":"https://cdn-icons-png.flaticon.com/512/25/25231.png"},{"id": 3,"titulo":"Lista",
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