import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductImgProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductoButtonsProps } from '../components/ProductButtons';


export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void,
}


export interface Product {
    id: string;
    img?: string;
    title: string;
}


// Esta es la interface con la que manejamos la llamada del componente por puntos <ProductCard.Title />


export interface ProductCardHOCProps {
    (Props: ProductCardProps): JSX.Element, // Este es el componete Padre
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
    Img:     ( Props: ProductImgProps ) => JSX.Element,
    Buttons: ( Props: ProductoButtonsProps ) => JSX.Element
}