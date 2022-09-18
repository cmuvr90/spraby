import {FC} from "react";
import type {AppProps} from 'next/app'
import {MainLayout} from "../core/layouts/MainLayout";
import '../styles/index.scss';
import Head from 'next/head';

/**
 *
 * @param Component
 * @param pageProps
 * @constructor
 */
const App: FC = ({Component, pageProps}: AppProps) => {
    const Layout = MainLayout(Component);
    return <>
        <Head>
            <title>app</title>
        </Head>
        <Layout {...pageProps}/>
    </>
}

export default App;