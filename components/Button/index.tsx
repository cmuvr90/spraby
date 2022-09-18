import React, {FC} from "react";
import {ButtonStyled} from "./Style.styles";

interface PropsInterface {
    primary?: boolean,
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
    children?: string
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

/**
 *
 * @param primary
 * @param size
 * @param children
 * @param onClick
 * @constructor
 */
export const Button: FC<PropsInterface> = ({
    primary = false,
    size = 'medium',
    children,
    onClick
}) => {
    return <ButtonStyled onClick={onClick} primary={primary} size={size}>
        {
            children && <span>{children}</span>
        }
    </ButtonStyled>
}