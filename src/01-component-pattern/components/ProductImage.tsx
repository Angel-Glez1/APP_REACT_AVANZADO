import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import style from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext);

    const imgRender = product.img
        ? product.img
        : img ? img : noImage

    return (
        <img className={style.productImg} src={imgRender} alt="producto img" />
    )
}