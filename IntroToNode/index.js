const superheroes = require ('superheroes');

const supervillains = require('supervillains');

//Gerador de nomes de super herois 
let mySuperHeroName = superheroes.random();

console.log(mySuperHeroName);

//Gerador de nomes de super Vilões
let mySuperVillainName = supervillains.random();
console.log(mySuperVillainName);

//Pesquisa por um wallpaper de anime com o nome declarado na linha 19
const {AnimeWallpaper} = require('anime-wallpapers');
const wall = new AnimeWallpaper();

async function Wallpaper2(){
    const wallpaper = await wall.getAnimeWall2("Rengoku")
    return console.log(wallpaper[0].image)
}

Wallpaper2()

//Retorna um gif de abraço 
const Anime_Images = require('anime-images-api')
const API = new Anime_Images()
async function getIMG(){
    let { image } = await API.sfw.hug()
    console.log(image)
}
getIMG()

