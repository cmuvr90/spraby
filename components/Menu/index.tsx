import React from 'react';
import style from '../../styles/conponents/Menu.module.scss'
import {FC} from "react";
import {MenuWrapper} from "./Style.styles";
import Link from "next/link";

export const Menu: FC = () => {

    const data = [
        {
            title: 'Одежда',
            url: '/',
            children: []
        },
        {
            title: 'Аксессуары',
            url: '/collections/accessories',
            children: [
                {
                    title: 'Украшения',
                    url: '/collections/decorating',
                    children: [
                        {
                            title: 'Бини и зимние шапки',
                            url: '/'
                        },
                        {
                            title: 'Солнцезащитные очки',
                            url: '/'
                        },
                        {
                            title: 'Венцы и тиары',
                            url: '/'
                        },
                        {
                            title: 'Очки обычные',
                            url: '/'
                        },
                        {
                            title: 'Вуалетки и мини шляпки',
                            url: '/'
                        },
                        {
                            title: 'Брелки для ключей и ремешки',
                            url: '/'
                        },
                        {
                            title: 'Повязки на голову',
                            url: '/'
                        },
                        {
                            title: 'Зонты и принадлежности для защиты от дождя',
                            url: '/'
                        },
                        {
                            title: 'Шарфы',
                            url: '/'
                        },
                        {
                            title: 'Перчатки',
                            url: '/'
                        },
                        {
                            title: 'Накидки',
                            url: '/'
                        },
                        {
                            title: 'Минетки',
                            url: '/'
                        },
                        {
                            title: 'Пояса',
                            url: '/'
                        },
                        {
                            title: 'Подвязки',
                            url: '/'
                        }
                    ]
                },
                {
                    title: 'Сумки и кошельки',
                    url: '/',
                    children: []
                },
                {
                    title: 'Ожерелья',
                    url: '/',
                    children: []
                },
                {
                    title: 'Кольца',
                    url: '/',
                    children: []
                },
                {
                    title: 'Серьги',
                    url: '/',
                    children: []
                },
                {
                    title: 'Браслеты',
                    url: '/',
                    children: []
                },
                {
                    title: 'Украшения для тела',
                    url: '/',
                    children: []
                }
            ]
        },
        {
            title: 'Дом',
            url: '/',
            children: [
                {
                    title: 'Украшения',
                    url: '/',
                    children: [
                        {
                            title: 'Бини и зимние шапки',
                            url: '/'
                        },
                        {
                            title: 'Солнцезащитные очки',
                            url: '/'
                        },
                        {
                            title: 'Венцы и тиары',
                            url: '/'
                        },
                        {
                            title: 'Очки обычные',
                            url: '/'
                        },
                        {
                            title: 'Вуалетки и мини шляпки',
                            url: '/'
                        },
                        {
                            title: 'Брелки для ключей и ремешки',
                            url: '/'
                        },
                        {
                            title: 'Повязки на голову',
                            url: '/'
                        },
                        {
                            title: 'Зонты и принадлежности для защиты от дождя',
                            url: '/'
                        },
                        {
                            title: 'Шарфы',
                            url: '/'
                        },
                        {
                            title: 'Перчатки',
                            url: '/'
                        },
                        {
                            title: 'Накидки',
                            url: '/'
                        }
                    ]
                },
                {
                    title: 'Сумки и кошельки',
                    url: '/',
                    children: []
                },
                {
                    title: 'Ожерелья',
                    url: '/',
                    children: []
                },
                {
                    title: 'Кольца',
                    url: '/',
                    children: []
                },
                {
                    title: 'Серьги',
                    url: '/',
                    children: []
                },
                {
                    title: 'Браслеты',
                    url: '/',
                    children: []
                },
                {
                    title: 'Украшения для тела',
                    url: '/',
                    children: []
                }
            ]
        },
        {
            title: 'Керамика',
            url: '/',
            children: [
                {
                    title: 'Украшения',
                    url: '/',
                    children: [
                        {
                            title: 'Бини и зимние шапки',
                            url: '/'
                        },
                        {
                            title: 'Солнцезащитные очки',
                            url: '/'
                        },
                        {
                            title: 'Венцы и тиары',
                            url: '/'
                        },
                        {
                            title: 'Очки обычные',
                            url: '/'
                        },
                        {
                            title: 'Вуалетки и мини шляпки',
                            url: '/'
                        },
                        {
                            title: 'Брелки для ключей и ремешки',
                            url: '/'
                        },
                        {
                            title: 'Повязки на голову',
                            url: '/'
                        },
                        {
                            title: 'Зонты и принадлежности для защиты от дождя',
                            url: '/'
                        },
                        {
                            title: 'Шарфы',
                            url: '/'
                        },
                        {
                            title: 'Перчатки',
                            url: '/'
                        },
                        {
                            title: 'Накидки',
                            url: '/'
                        },
                        {
                            title: 'Минетки',
                            url: '/'
                        },
                        {
                            title: 'Пояса',
                            url: '/'
                        },
                        {
                            title: 'Подвязки',
                            url: '/'
                        }
                    ]
                },
                {
                    title: 'Сумки и кошельки',
                    url: '/',
                    children: []
                },
                {
                    title: 'Ожерелья',
                    url: '/',
                    children: []
                },
                {
                    title: 'Кольца',
                    url: '/',
                    children: []
                },
                {
                    title: 'Серьги',
                    url: '/',
                    children: []
                },
                {
                    title: 'Браслеты',
                    url: '/',
                    children: []
                },
                {
                    title: 'Украшения для тела',
                    url: '/',
                    children: []
                }
            ]
        },
        {
            title: 'Творчество',
            url: '/',
            children: [
                {
                    title: 'Украшения',
                    url: '/',
                    children: [
                        {
                            title: 'Бини и зимние шапки',
                            url: '/'
                        },
                        {
                            title: 'Солнцезащитные очки',
                            url: '/'
                        },
                        {
                            title: 'Венцы и тиары',
                            url: '/'
                        },
                        {
                            title: 'Очки обычные',
                            url: '/'
                        },
                        {
                            title: 'Вуалетки и мини шляпки',
                            url: '/'
                        },
                        {
                            title: 'Брелки для ключей и ремешки',
                            url: '/'
                        },
                        {
                            title: 'Повязки на голову',
                            url: '/'
                        },
                        {
                            title: 'Зонты и принадлежности для защиты от дождя',
                            url: '/'
                        },
                        {
                            title: 'Шарфы',
                            url: '/'
                        },
                        {
                            title: 'Перчатки',
                            url: '/'
                        },
                        {
                            title: 'Накидки',
                            url: '/'
                        },
                        {
                            title: 'Минетки',
                            url: '/'
                        },
                        {
                            title: 'Пояса',
                            url: '/'
                        },
                        {
                            title: 'Подвязки',
                            url: '/'
                        }
                    ]
                },
                {
                    title: 'Сумки и кошельки',
                    url: '/',
                    children: []
                },
                {
                    title: 'Ожерелья',
                    url: '/',
                    children: []
                },
                {
                    title: 'Кольца',
                    url: '/',
                    children: []
                },
                {
                    title: 'Серьги',
                    url: '/',
                    children: []
                },
                {
                    title: 'Браслеты',
                    url: '/',
                    children: []
                },
                {
                    title: 'Украшения для тела',
                    url: '/',
                    children: []
                }
            ]
        },
        {
            title: 'Косметика',
            url: '/',
            children: [
                {
                    title: 'Украшения',
                    url: '/',
                    children: [
                        {
                            title: 'Бини и зимние шапки',
                            url: '/'
                        },
                        {
                            title: 'Солнцезащитные очки',
                            url: '/'
                        },
                        {
                            title: 'Венцы и тиары',
                            url: '/'
                        },
                        {
                            title: 'Очки обычные',
                            url: '/'
                        },
                        {
                            title: 'Вуалетки и мини шляпки',
                            url: '/'
                        },
                        {
                            title: 'Брелки для ключей и ремешки',
                            url: '/'
                        },
                        {
                            title: 'Повязки на голову',
                            url: '/'
                        },
                        {
                            title: 'Зонты и принадлежности для защиты от дождя',
                            url: '/'
                        },
                        {
                            title: 'Шарфы',
                            url: '/'
                        },
                        {
                            title: 'Перчатки',
                            url: '/'
                        },
                        {
                            title: 'Накидки',
                            url: '/'
                        },
                        {
                            title: 'Минетки',
                            url: '/'
                        },
                        {
                            title: 'Пояса',
                            url: '/'
                        },
                        {
                            title: 'Подвязки',
                            url: '/'
                        }
                    ]
                },
                {
                    title: 'Сумки и кошельки',
                    url: '/',
                    children: []
                },
                {
                    title: 'Ожерелья',
                    url: '/',
                    children: []
                },
                {
                    title: 'Кольца',
                    url: '/',
                    children: []
                },
                {
                    title: 'Серьги',
                    url: '/',
                    children: []
                },
                {
                    title: 'Браслеты',
                    url: '/',
                    children: []
                },
                {
                    title: 'Украшения для тела',
                    url: '/',
                    children: []
                }
            ]
        },
        {
            title: 'Подарки',
            url: '/',
            children: [
                {
                    title: 'Украшения',
                    url: '/',
                    children: [
                        {
                            title: 'Бини и зимние шапки',
                            url: '/'
                        },
                        {
                            title: 'Солнцезащитные очки',
                            url: '/'
                        },
                        {
                            title: 'Венцы и тиары',
                            url: '/'
                        },
                        {
                            title: 'Очки обычные',
                            url: '/'
                        },
                        {
                            title: 'Вуалетки и мини шляпки',
                            url: '/'
                        },
                        {
                            title: 'Брелки для ключей и ремешки',
                            url: '/'
                        },
                        {
                            title: 'Повязки на голову',
                            url: '/'
                        },
                        {
                            title: 'Зонты и принадлежности для защиты от дождя',
                            url: '/'
                        },
                        {
                            title: 'Шарфы',
                            url: '/'
                        },
                        {
                            title: 'Перчатки',
                            url: '/'
                        },
                        {
                            title: 'Накидки',
                            url: '/'
                        },
                        {
                            title: 'Минетки',
                            url: '/'
                        },
                        {
                            title: 'Пояса',
                            url: '/'
                        },
                        {
                            title: 'Подвязки',
                            url: '/'
                        }
                    ]
                },
                {
                    title: 'Сумки и кошельки',
                    url: '/',
                    children: []
                },
                {
                    title: 'Ожерелья',
                    url: '/',
                    children: []
                },
                {
                    title: 'Кольца',
                    url: '/',
                    children: []
                },
                {
                    title: 'Серьги',
                    url: '/',
                    children: []
                },
                {
                    title: 'Браслеты',
                    url: '/',
                    children: []
                },
                {
                    title: 'Украшения для тела',
                    url: '/',
                    children: []
                }
            ]
        },
        {
            title: 'Еда',
            url: '/',
            children: [
                {
                    title: 'Украшения',
                    url: '/',
                    children: [
                        {
                            title: 'Бини и зимние шапки',
                            url: '/'
                        },
                        {
                            title: 'Солнцезащитные очки',
                            url: '/'
                        },
                        {
                            title: 'Венцы и тиары',
                            url: '/'
                        },
                        {
                            title: 'Очки обычные',
                            url: '/'
                        },
                        {
                            title: 'Вуалетки и мини шляпки',
                            url: '/'
                        },
                        {
                            title: 'Брелки для ключей и ремешки',
                            url: '/'
                        },
                        {
                            title: 'Повязки на голову',
                            url: '/'
                        },
                        {
                            title: 'Зонты и принадлежности для защиты от дождя',
                            url: '/'
                        },
                        {
                            title: 'Шарфы',
                            url: '/'
                        },
                        {
                            title: 'Перчатки',
                            url: '/'
                        },
                        {
                            title: 'Накидки',
                            url: '/'
                        },
                        {
                            title: 'Минетки',
                            url: '/'
                        },
                        {
                            title: 'Пояса',
                            url: '/'
                        },
                        {
                            title: 'Подвязки',
                            url: '/'
                        }
                    ]
                },
                {
                    title: 'Сумки и кошельки',
                    url: '/',
                    children: []
                },
                {
                    title: 'Ожерелья',
                    url: '/',
                    children: []
                },
                {
                    title: 'Кольца',
                    url: '/',
                    children: []
                },
                {
                    title: 'Серьги',
                    url: '/',
                    children: []
                },
                {
                    title: 'Браслеты',
                    url: '/',
                    children: []
                },
                {
                    title: 'Украшения для тела',
                    url: '/',
                    children: []
                }
            ]
        },
        {
            title: 'Эксклюзив',
            url: '/',
            children: [
                {
                    title: 'Украшения',
                    url: '/',
                    children: [
                        {
                            title: 'Бини и зимние шапки',
                            url: '/'
                        },
                        {
                            title: 'Солнцезащитные очки',
                            url: '/'
                        },
                        {
                            title: 'Венцы и тиары',
                            url: '/'
                        },
                        {
                            title: 'Очки обычные',
                            url: '/'
                        },
                        {
                            title: 'Вуалетки и мини шляпки',
                            url: '/'
                        },
                        {
                            title: 'Брелки для ключей и ремешки',
                            url: '/'
                        },
                        {
                            title: 'Повязки на голову',
                            url: '/'
                        },
                        {
                            title: 'Зонты и принадлежности для защиты от дождя',
                            url: '/'
                        },
                        {
                            title: 'Шарфы',
                            url: '/'
                        },
                        {
                            title: 'Перчатки',
                            url: '/'
                        },
                        {
                            title: 'Накидки',
                            url: '/'
                        },
                        {
                            title: 'Минетки',
                            url: '/'
                        },
                        {
                            title: 'Пояса',
                            url: '/'
                        },
                        {
                            title: 'Подвязки',
                            url: '/'
                        }
                    ]
                },
                {
                    title: 'Сумки и кошельки',
                    url: '/',
                    children: []
                },
                {
                    title: 'Ожерелья',
                    url: '/',
                    children: []
                },
                {
                    title: 'Кольца',
                    url: '/',
                    children: []
                },
                {
                    title: 'Серьги',
                    url: '/',
                    children: []
                },
                {
                    title: 'Браслеты',
                    url: '/',
                    children: []
                },
                {
                    title: 'Украшения для тела',
                    url: '/',
                    children: []
                }
            ]
        }
    ]


    const renderItems = items => {
        return items?.length ? <ul>
            {
                items.map(i => {
                    return <li>
                        <Link href={i.url}>
                            <a>{i.title}</a>
                        </Link>
                        {renderItems(i.children)}
                    </li>
                })
            }
        </ul> : null;
    }

    return <MenuWrapper className={style.wrapper}>
        {renderItems(data)}
    </MenuWrapper>
}