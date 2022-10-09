import React, {FC, useMemo} from "react";
import Layout from "../../../components/Layout";
import {DoubleSlider} from "../../../components/DoubleSlider";
import {Text} from "../../../components/Text";
import Stack from "../../../components/Stack";
import {Badge} from "../../../components/Badge";
import {Accordion} from "../../../components/Accordion";
import {Button} from "../../../components/Button";
import {Selector} from "../../../components/Selector";


interface Product {
    id: number,
    title: string,
    tags: string[],
    images: string[],
    description: string
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
    ],
    description: 'Портал SPRA.BY не является интернет-магазином, приобретение товара осуществляется напрямую у ремесленника, юридического лица или в стационарном торговом объекте по указанному адресу продавца. \n' +
        '\n' +
        'Информация о товарах на портале SPRA.BY носит справочный характер и не является публичной офертой. Указанная цена на Шахматы "Александр Невский" может отличаться от фактической. Если в описании или цене вы заметили неточность или ошибку, пожалуйста, сообщите нам на почту help@spra.by.'
}


/**
 *
 * @constructor
 */
export const Product: FC = () => {
    const product = DEFAULT_PRODUCT;

    const images = useMemo(() => product.images.map(i => <img src={i} alt={''}/>), [product]);

    const tags = product.tags.map(i => <Badge key={i} status={'info'}>{i}</Badge>)

    return (
        <Layout columns={[6, 4]}>
            <Layout.Section>
                <DoubleSlider items={images} thumbnailsShow={8}/>
            </Layout.Section>
            <Layout.Section>
                <Stack vertical spacing={'15px'} alignment={'leading'}>
                    <Text as={"h1"}>{product.title}</Text>
                    <Stack wrap spacing={'10px'} full>
                        {tags}
                    </Stack>
                    <Stack spacing={'10px'} full>
                        <Button full primary>Заказать</Button>
                        <Button full primary inner>Контакты</Button>
                    </Stack>
                    <Accordion state={'open'} items={[
                        {key: 'description', title: 'Дополнительная информация ', content: product.description},
                    ]}/>
                    <Stack  spacing={'24px'} vertical full>
                        <Selector
                            title={'Название параметра'}
                            items={[
                                {
                                    label: 'Выберите параметр',
                                    value: 'color'
                                },
                                {
                                    label: 'Выберите параметр 1',
                                    value: 'color2'
                                },
                                {
                                    label: 'Выберите параметр 2',
                                    value: 'color2'
                                }
                            ]}
                        />
                        <Selector
                            title={'Название параметра'}
                            items={[
                                {
                                    label: 'Выберите параметр',
                                    value: 'color'
                                },
                                {
                                    label: 'Выберите параметр 1',
                                    value: 'color2'
                                },
                                {
                                    label: 'Выберите параметр 2',
                                    value: 'color2'
                                }
                            ]}
                        />
                        <Selector
                            title={'Название параметра'}
                            items={[
                                {
                                    label: 'Выберите параметр',
                                    value: 'color'
                                },
                                {
                                    label: 'Выберите параметр 1',
                                    value: 'color2'
                                },
                                {
                                    label: 'Выберите параметр 2',
                                    value: 'color2'
                                }
                            ]}
                        />
                    </Stack>

                </Stack>
            </Layout.Section>
        </Layout>
    )
}