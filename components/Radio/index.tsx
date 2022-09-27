import React, {FC} from "react";
import {RadioWrapper} from "./Style.styles";

interface PropsInterface {
    label?: string,
    name?: string
}

/**
 *
 * @constructor
 */
export const Radio: FC<PropsInterface> = ({label, name}) => {
    return <RadioWrapper>
        <label>
            <input type={'radio'} name={name}/>
            {
                label && <span>{label}</span>
            }
        </label>
    </RadioWrapper>
}