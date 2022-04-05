import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import useProductos from '../hooks/useProductos';
import style from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ product, children }: ProductCardProps) => {

    const { counter, increaseBy } = useProductos();
    
    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product 
            }}
        >
            
            <div className={style.productCard}>
                {children}
            </div>

        </Provider>
    );
};

