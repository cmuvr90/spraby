import React, {FC} from "react";
import {CheckboxWrapper} from "./Style.styles";

interface PropsInterface {
    label?: string,
    name?: string
}

/**
 *
 * @constructor
 */
export const Checkbox: FC<PropsInterface> = ({label, name}) => {
    return <CheckboxWrapper>
        <label>
            <input type={'checkbox'} name={name}/>
            {
                label && <span>{label}</span>
            }
        </label>
    </CheckboxWrapper>
}