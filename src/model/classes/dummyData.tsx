import { Category } from "../classes/Category";
import { Hobby } from "../classes/Hobby";

export const Categories = [
  new Category('1', 'Deportes', '#0085C7'),
  new Category('2', 'Video juegos', '#0039C7'),
  new Category('3', 'Comidas', '#C71B00'),
  new Category('4', 'Idiomas', '#00C706'),
  new Category('5', 'Juego de mesa', '#F7DC6F'),

];

export const Hobbies = [
  new Hobby('1', ['1','2'], 
  'Halo 6',
   'https://i.pinimg.com/564x/aa/00/95/aa0095fed0b4cdffe16e435aad165e22.jpg',
    ['Concentracion']),
  new Hobby('2', ['1','2'],
   'Correr',
    'https://fotografias.correryfitness.com/clipping/cmsimages01/2019/09/23/AE357C4B-E3AC-4DAE-B918-7C346BF5CA40/58.jpg',
     ['Concentracion', 'Condición']),
]