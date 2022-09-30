import React from 'react';
import {FC} from "react";
import style from './ProductCart.module.scss'
import Link from "next/link";

interface PropsInterface {
    image?: string
    title?: string
    description?: string
    price?: string
    discountPrice?: string,
    discountPercent?: string,
    url?: string
}

/**
 *
 * @param image
 * @param title
 * @param description
 * @param price
 * @param discountPrice
 * @param discountPercent
 * @param url
 * @constructor
 */
export const ProductCart: FC<PropsInterface> = ({
                                                    image,
                                                    title,
                                                    description,
                                                    price,
                                                    discountPrice,
                                                    discountPercent,
                                                    url
                                                }) => {
    const productBody = (
        <>
            {
                discountPercent && <div className={style.discount}>{discountPercent}</div>
            }
            <div className={style.image}>
                {
                    image && <img src={image} alt={title}/>
                }
            </div>
            <div className={style.body}>
                <span className={style.title}>{title}</span>
                <span className={style.description}>{description}</span>
                <span className={style.priceBody}>
                    {
                        discountPrice && <span className={style.price}>{price}</span>
                    }
                    {
                        discountPrice && <span className={style.discountPrice}>{discountPrice}</span>
                    }
                    {
                        !discountPrice && <span className={style.priceWithoutDiscount}>{price}</span>
                    }
                </span>
            </div>
        </>
    )

    return <div className={style.cart}>
        {
            url ? <Link href={url}><a>{productBody}</a></Link> : productBody
        }
    </div>
}