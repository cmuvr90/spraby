import Image from "next/image";
import React, {FC} from "react";
import bigBanImg from "../../../public/big-ben.jpg";

export const HomePage: FC = (props) => {

    return <div>
        <Image
            layout="responsive"
            src={bigBanImg}
            alt={'big ban'}
            placeholder={'blur'}
        />
    </div>
}