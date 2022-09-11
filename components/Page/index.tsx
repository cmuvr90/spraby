import React, {FC, PropsWithChildren} from "react";
import {SPage} from "./Style.styles";

/**
 *
 * @param children
 * @constructor
 */
export const Page: FC<PropsWithChildren> = ({children}) => {
    return <SPage>
        {children}
    </SPage>
}