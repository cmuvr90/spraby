import React, {FC, ReactNode} from "react";
import {GridWrapper} from "./Style.styles";


interface PropsInterface {
    columns?: number;
    gap?: string;
    children?: ReactNode | [ReactNode],
}

/**
 *
 * @constructor
 */
export const Grid: FC<PropsInterface> = ({columns = 4, gap='32px', children}) => {
    return <GridWrapper columns={columns} gap={gap}>
        {children}
    </GridWrapper>
}