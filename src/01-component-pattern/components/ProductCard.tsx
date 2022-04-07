import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
import useProductos from '../hooks/useProductos';
import style from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;

}

export const ProductCard = ({ product, onChange, children, value, className, style: cssInline }: Props) => {

    const { counter, increaseBy } = useProductos({ product, onChange, value });


    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >

            <div className={`${style.productCard} ${className}`} style={cssInline}>
                {children}
            </div>

        </Provider>
    );
};

