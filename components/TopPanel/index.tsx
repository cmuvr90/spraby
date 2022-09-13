import React, {FC} from "react";
import {TopPanelStyled} from "./Style.styles";

interface PropsInterface {
    description?: string,
    align?: 'center' | 'left' | 'right'
}

/**
 *
 * @param description
 * @param align
 * @constructor
 */
export const TopPanel: FC<PropsInterface> = ({description = null, align = 'center'}) => {
    return <TopPanelStyled align={align}>
        {
            description && <span>{description}</span>
        }
    </TopPanelStyled>
}