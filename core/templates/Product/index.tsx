import React, {FC, useMemo} from "react";
import Layout from "../../../components/Layout";
import {DoubleSlider} from "../../../components/DoubleSlider";
import {Text} from "../../../components/Text";
import Stack from "../../../components/Stack";
import {Badge} from "../../../components/Badge";


interface Product {
    id: number,
    title: string,
    tags: string[],
    images: string[]
}

interface ProductsProps {
    product?: Product
}

const DEFAULT_PRODUCT = {
    id: 123,
    title: 'Название товара',
    tags: [
        'Игрушки и игры',
        'Игры и головоломки',
        'Головоломки',
        'Подарки',
        'Наборы игрушек',
        'Сладости',
        'Изделия из шоколада',
        'Шоколадные подарочные наборы',
        'Мастерская шоколада',
        'Продукты питания'
    ],
    images: [
        'https://splidejs.com/images/slides/general/01.jpg',
        'https://splidejs.com/images/slides/general/02.jpg',
        'https://splidejs.com/images/slides/general/03.jpg',
        'https://splidejs.com/images/slides/general/04.jpg',
        'https://splidejs.com/images/slides/general/05.jpg',
        'https://splidejs.com/images/slides/general/06.jpg',
        'https://splidejs.com/images/slides/general/07.jpg',
        'https://splidejs.com/images/slides/general/08.jpg',
        'https://splidejs.com/images/slides/general/09.jpg',
    ]
}


/**
 *
 * @constructor
 */
export const Product: FC = () => {

    const product = DEFAULT_PRODUCT;


    const images = useMemo(() => product.images.map(i => <img src={i} alt={''}/>), [product]);

    const tags = product.tags.map(i => <Badge status={'info'}>{i}</Badge>)

    return (
        <Layout columns={[6, 4]}>
            <Layout.Section>
                <DoubleSlider items={images} thumbnailsShow={8}/>
            </Layout.Section>
            <Layout.Section>
                <Text as={"h1"}>{product.title}</Text>
                <Stack wrap spacing={'10px'}>
                    {tags}
                </Stack>
            </Layout.Section>
        </Layout>
    )
}