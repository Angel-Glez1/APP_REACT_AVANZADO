import { Product } from '../interfaces/interfaces'


const product1: Product = {
    id: '1',
    title: 'Coffe mug',
    img: './coffee-mug.png'
}

const product2: Product = {
    id: '2',
    title: 'Coffe mug meme',
    img: './coffee-mug2.png',
}


export const products: Product[] = [product1, product2]
