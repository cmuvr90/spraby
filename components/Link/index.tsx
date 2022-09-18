import React, {FC} from "react";
import {LinkWrapper} from "./Style.styles";
import {default as NextLink} from "next/link";

interface PropsInterface {
    href?: string,
    size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
    children?: string
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

/**
 *
 * @param href
 * @param children
 * @param onClick
 * @constructor
 */
export const Link: FC<PropsInterface> = ({
    href = '',
    children,
    onClick
}) => {
    return <LinkWrapper>
        {
            <NextLink href={href} onClick={onClick}>
                <a>
                    {
                        children && <span>{children}</span>
                    }
                </a>
            </NextLink>
        }
    </LinkWrapper>
}