import { ReactElement } from 'react';


export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void,
}

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]

}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Img: ({ img }: { img?: string | undefined }) => JSX.Element,
    Buttons: () => JSX.Element
}