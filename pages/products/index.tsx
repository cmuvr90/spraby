import {Products} from "../../core/templates/Products";
import {GetServerSideProps, GetServerSidePropsContext} from "next";

export default function (props) {
    return <Products {...props}/>
}

/**
 *
 * @param context
 */
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const products = await response.json();
    return {
        props: {products}
    }
}