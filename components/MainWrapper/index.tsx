import React, {FC, PropsWithChildren} from "react";
import {MainWrapperStyled} from "./Style.styles";

/**
 *
 * @param children
 * @constructor
 */
export const MainWrapper: FC<PropsWithChildren> = ({children}) => {
    return <MainWrapperStyled>
        {children}
    </MainWrapperStyled>
}