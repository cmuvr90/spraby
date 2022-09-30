import React, {FC, useEffect, useRef} from "react";
import Layout from "../../../components/Layout";
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import Image from "next/image";
import {DoubleSlider} from "../../../components/DoubleSlider";


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

    const items = [
        <img src={'https://splidejs.com/images/slides/general/01.jpg'} alt={''}/>,
        <img src={'https://splidejs.com/images/slides/general/02.jpg'} alt={''}/>,
        <img src={'https://splidejs.com/images/slides/general/03.jpg'} alt={''}/>,
        <img src={'https://splidejs.com/images/slides/general/04.jpg'} alt={''}/>,
        <img src={'https://splidejs.com/images/slides/general/05.jpg'} alt={''}/>,
        <img src={'https://splidejs.com/images/slides/general/06.jpg'} alt={''}/>,
        <img src={'https://splidejs.com/images/slides/general/07.jpg'} alt={''}/>,
        <img src={'https://splidejs.com/images/slides/general/08.jpg'} alt={''}/>,
        <img src={'https://splidejs.com/images/slides/general/09.jpg'} alt={''}/>,
    ]

    return (
        <Layout columns={[6, 4]}>
            <Layout.Section>
                <DoubleSlider items={items} thumbnailsShow={8}/>
            </Layout.Section>
            <Layout.Section>
                2
            </Layout.Section>
        </Layout>
    )
}