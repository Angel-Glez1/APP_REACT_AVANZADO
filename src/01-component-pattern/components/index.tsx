import { ProductCard as ProductCardHoc } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from "./ProductButtons";
import { ProductCardHOCProps } from '../interfaces/interfaces';


export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from "./ProductButtons";




/**
 * * El metodo assing nos permite asignarle
 * * nuevas propiedades, a nuestro componente padre
 * * para que asi podamos usar las dos formas 
 * * para este patron de componentes 
 * ? Compound Component Patter 
 * * Recuerda estas son las dos formas de ocupar el componente
 * 
 * todo 1
 * <Producto>
 *        <Producto.Precio/>
 *        <Producto.Descripcion/>
 * </Producto>
 * 
 * todo 2 : en este caso vas a llamar los componentes con el nombre que le pusiste al crearlos.
 * <Producto>
 *        <ProductoPrecio/>
 *        <ProductoDescripcion/>
 * </Producto>
 */

export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHoc, {
    Title: ProductTitle,
    Img: ProductImage,
    Buttons: ProductButtons
}); 

export default ProductCard;

