import {Product} from "../../core/templates/Product";
import {GetServerSideProps, GetServerSidePropsContext} from "next";

export default function (props) {
    return <Product {...props}/>
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.params.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const product = await response.json();
    return {
        props: {product}
    }
}
