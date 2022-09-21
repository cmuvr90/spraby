import React, {FC, PropsWithChildren} from "react";
import {BodyWrapper} from "./Style.styles";


/**
 *
 * @constructor
 */
export const Body: FC<PropsWithChildren> = ({children}) => {
    return <BodyWrapper>
        {children}
    </BodyWrapper>
}