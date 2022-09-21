import React, {FC, PropsWithChildren} from "react";
import {HeaderWrapper} from "./Style.styles";


/**
 *
 * @constructor
 */
export const Header: FC<PropsWithChildren> = ({children}) => {
    return <HeaderWrapper>
        {children}
    </HeaderWrapper>
}