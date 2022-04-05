import React from 'react';
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import style from '../styles/styles.module.css';

export interface Props {
    className?: string
    style?: React.CSSProperties
}

export const ProductButtons = ({ className, style: cssInline }: Props) => {

    const { increaseBy, counter } = useContext(ProductContext);


    return (
        <div className={`${style.buttonsContainer} ${className}`} style={cssInline} >
            <button
                className={style.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>

            <div className={style.countLabel}>{counter}</div>

            <button
                className={style.buttonAdd}
                onClick={() => increaseBy(1)}
            >
                +
            </button>
        </div>
    )
}