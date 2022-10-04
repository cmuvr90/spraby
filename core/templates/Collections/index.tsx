import React, {FC} from "react";
import {ProductCart} from "../../../components/ProductCart";
import {Grid} from "../../../components/Grid";
import Layout from "../../../components/Layout";
import {Filter} from "../../../components/Filter";

/**
 *
 * @param props
 * @constructor
 */
export const Collections: FC = (props) => {

    const products = [
        {
            image: 'https://avatars.mds.yandex.net/i?id=43131c522436b4d49d2229d770e7d46f-4766550-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=31b6375bebb40ffbb28ca32ebf0e6de2-5311685-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7b9ab108d7cdcd2cfbff44e6d423ced9-5673334-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7ee764dec4cc15fa74f03c138979ab16-5346024-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=b1e343efd12ee13775cd9b25f874e352-5038807-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=43131c522436b4d49d2229d770e7d46f-4766550-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=aafecb1a1f5ae7404a8b5e3c74ebcf25-4388983-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7b9ab108d7cdcd2cfbff44e6d423ced9-5673334-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=31b6375bebb40ffbb28ca32ebf0e6de2-5311685-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://yandex-images.clstorage.net/J9fEq9383/e7bacdoT/TFtrRGYrW90pVTu2JGqflgXhypyIN0yg1L-q3yoJ4d6cYiKSniFJ7hmmU26hUJwr0k-E7MG2-FchjcynagZLsilPDkAC6uo52fUrthS6DiaVkXoceLcN4KSaL66fLAW7OTbjsn4i6lkOJCWJ0jc7bECeIalR0zzTkMn6QerSHLUcKEoHhGqYaJknydNka_4HRQKOjegmSCKjzEuoT_xWzFuWAMY6o8s4L7ZlW1BHGgzxTKEbQyIO9yGYeuCdwm-3LPtJB0Yp28lpV1pSJypfZObB7wzpFGiDAy9biG-cV9xJRvAky4MoyU7EJ1oTd2t-YG7h-CLi_eWAq8sxjiFOJs9q2BalOUp72CQb01XKb4akEx1dGOS6k-MfGNg_TfZuqTZRtqsTK7ve9YcaYgeZfVCsE-ghQBwFs9h4gN1DHIUPOFkGhRvpqMqU6yNFuQ5FF3NtLAhUOIIDjeh7zn3Uf5vlUpWIo1m6fhU02VNEyByxHaE7YdEuNYKpC5CcMWz0Pgqb9AUqO3r7ZegydJsPhUTBzNw6tWkys-55i2wfRbz7tdCVSfGbi3wWFytjt9idwMyg-XDTHBUBuvvSbgP8dCxau4fVKKn7S6WYsPfrDmdGsH1uGHRZU9DMuzoODHRuu5WQNSgAKug9doXrUGVaHDA_QVjyos22EqrbgJzyLGeMKNlHVwoKyMmnSmAVWF3nNqKMLKh3KrMDrQuoDSx1vvjG4ef6Ugl4nkbUCAIUK8-wT1LLcUNeBtHJi1Ks4c_2viooB6SKC5mbZirCh8vtxtSQfwyq1ppBE35J-N8NtOzYJ3LWqlA6-r7kReuRBbq-At9CiTPD_xdii9vBPcHvlL9ZmNfXe_p52BQYcmS5n5cVcCw9OfRJYSOee_ld7kcuKgWyBisBmVvtdVU5w9SaDVDfE4kR0u-lspo60M_hf3f_WRsGdBtISRs2awJnSM_1R1N-P0iGypNBjJrKz3_ng',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7b9ab108d7cdcd2cfbff44e6d423ced9-5673334-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=aafecb1a1f5ae7404a8b5e3c74ebcf25-4388983-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=43131c522436b4d49d2229d770e7d46f-4766550-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=31b6375bebb40ffbb28ca32ebf0e6de2-5311685-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7b9ab108d7cdcd2cfbff44e6d423ced9-5673334-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7ee764dec4cc15fa74f03c138979ab16-5346024-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=43131c522436b4d49d2229d770e7d46f-4766550-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=31b6375bebb40ffbb28ca32ebf0e6de2-5311685-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7b9ab108d7cdcd2cfbff44e6d423ced9-5673334-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7ee764dec4cc15fa74f03c138979ab16-5346024-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=31b6375bebb40ffbb28ca32ebf0e6de2-5311685-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7b9ab108d7cdcd2cfbff44e6d423ced9-5673334-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7ee764dec4cc15fa74f03c138979ab16-5346024-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        },
        {
            image: 'https://avatars.mds.yandex.net/i?id=7b9ab108d7cdcd2cfbff44e6d423ced9-5673334-images-thumbs&n=13&exp=1',
            title: 'Название товара',
            description: 'Название продавца',
            price: '220.00',
            discountPrice: '200.00 BYN',
            url: '/products/1'
        }
    ]

    const filter = [
        {
            title: 'Специальные предложения',
            type: 'checkbox',
            key: 'offers',
            values: [
                {
                    title: 'Бесплатная доставка',
                    value: 'free_shipping'
                },
                {
                    title: 'Со скидкой',
                    value: 'with_discount'
                }
            ]
        },
        {
            title: 'Доставка',
            type: 'checkbox',
            key: 'shipping',
            values: [
                {
                    title: '1 рабочий день',
                    value: '1_day'
                },
                {
                    title: '1-3 рабочих дня',
                    value: '1-3_day'
                },
                {
                    title: 'в течении 7 рабочих дней',
                    value: '7_day'
                }
            ]
        },
        {
            title: 'Цена',
            type: 'radio',
            key: 'price',
            values: [
                {
                    title: 'Любая цена',
                    value: 'any'
                },
                {
                    title: 'Дешевле 25 BYN',
                    value: '0_25'
                },
                {
                    title: '25 - 50 BYN',
                    value: '25_50'
                },
                {
                    title: '50 - 100 BYN',
                    value: '50_100'
                },
                {
                    title: 'Дороже 100 BYN',
                    value: 'more_100'
                }
            ]
        },
        {
            title: 'Цвет',
            type: 'checkbox',
            key: 'color',
            values: [
                {
                    title: 'Беж',
                    value: 'beg'
                },
                {
                    title: 'Черный',
                    value: 'black'
                },
                {
                    title: 'Синий',
                    value: 'black'
                },
                {
                    title: 'Бронза',
                    value: 'bronz'
                },
                {
                    title: 'Корничевый',
                    value: 'green'
                },
                {
                    title: 'Крассный',
                    value: 'red'
                },
                {
                    title: 'Желтый',
                    value: 'yellow'
                }
            ]
        }
    ]

    return <Layout columns={['2', '8']}>
        <Layout.Section>
            <Filter filter={filter}/>
        </Layout.Section>
        <Layout.Section>
            <Grid>
                {
                    products.map(product => (
                        <ProductCart
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            discountPrice={product.discountPrice}
                            url={product.url}
                        />
                    ))
                }
            </Grid>
        </Layout.Section>
    </Layout>
}