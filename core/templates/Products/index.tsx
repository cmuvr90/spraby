import Link from 'next/link';
import React, {FC} from "react";


interface Product {
    id: number,
    name: string
}

interface ProductsProps {
    products?: Product[]
}

/**
 *
 * @param products
 * @constructor
 */
export const Products: FC<ProductsProps> = ({products = []}) => {

    return (
        <div>
            <ul>
                {
                    products.map(p => (
                        <li key={p.id}>
                            <Link href={`/products/${p.id}`}>
                                {p.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}