import React from 'react';
import Link from "next/link";
import style from '../../styles/conponents/Menu.module.scss'
import {FC} from "react";

export const Menu: FC = () => {
    return (
        <nav className={style.wrapper}>
            <ul className={style.ul}>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/products'}>Products</Link>
                </li>
                <li>
                    <Link href={'/collections'}>Collections</Link>
                </li>
            </ul>
        </nav>
    )
}