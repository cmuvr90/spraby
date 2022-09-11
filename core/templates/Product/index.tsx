import React, {FC} from "react";

interface Product {
    id: number,
    name: string
}

interface ProductsProps {
    product?: Product
}

/**
 *
 * @param products
 * @constructor
 */
export const Product: FC<ProductsProps> = ({product}) => {

    return (
        <div>
            <h1>Product</h1>
            <div>
                <div>{product.id}</div>
                <div>{product.name}</div>
            </div>
        </div>
    )
}