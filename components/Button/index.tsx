import React, {FC} from "react";
import {ButtonStyled} from "./Style.styles";

interface PropsInterface {
    primary?: boolean,
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
    full?: boolean,
    inner?: boolean,
    children?: string
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

/**
 *
 * @param primary
 * @param size
 * @param full
 * @param inner
 * @param children
 * @param onClick
 * @constructor
 */
export const Button: FC<PropsInterface> = ({
                                               primary = false,
                                               size = 'medium',
                                               full = false,
                                               inner = false,
                                               children,
                                               onClick
                                           }) => {
    return <ButtonStyled onClick={onClick} primary={primary} size={size} full={full} inner={inner}>
        {
            children && <span>{children}</span>
        }
    </ButtonStyled>
}