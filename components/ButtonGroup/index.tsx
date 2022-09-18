import React, {FC, ReactNode} from "react";
import {ButtonGroupWrapper} from "./Style.styles";

interface PropsInterface {
    children?: ReactNode | [ReactNode]
}

/**
 *
 * @constructor
 */
export const ButtonGroup: FC<PropsInterface> = ({children}) => {

    const count = Array.isArray(children) ? children.length : 1;

    return <ButtonGroupWrapper count={count}>
        {
            children
        }
    </ButtonGroupWrapper>
}