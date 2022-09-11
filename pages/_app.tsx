import {FC} from "react";
import type { AppProps } from 'next/app'
import {MainLayout} from "../core/layouts/MainLayout";

/**
 *
 * @param Component
 * @param pageProps
 * @constructor
 */
const App: FC = ({Component, pageProps}: AppProps) => {
    const Layout = MainLayout(Component);
    return <Layout {...pageProps}/>;
}

export default App;