import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';
import useProductos from '../hooks/useProductos';
import style from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string,
    style?: React.CSSProperties
}

export const ProductCard = ({ product, children, className, style: cssInline }: Props) => {

    const { counter, increaseBy } = useProductos();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product
            }}
        >

            <div className={`${style.productCard} ${className}`} style={cssInline}>
                {children}
            </div>

        </Provider>
    );
};

