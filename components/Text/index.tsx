import React, {FC} from "react";
import {Header1, Header2, Header3, Header4, Header5, Header6, Paragraph, Wrapper, BLockWrapper} from "./Style.styles";


interface PropsInterface {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div',
    children?: any,
    size?: string | number,
    color?: string
}

/**
 *
 * @constructor
 */
export const Text: FC<PropsInterface> = ({
                                             as = 'span',
                                             children,
                                             size,
                                             color
                                         }) => {
    switch (as) {
        case "h1":
            return <Header1 size={size} color={color}>{children}</Header1>
        case "h2":
            return <Header2 size={size} color={color}>{children}</Header2>
        case "h3":
            return <Header3 size={size} color={color}>{children}</Header3>
        case "h4":
            return <Header4 size={size} color={color}>{children}</Header4>
        case "h5":
            return <Header5 size={size} color={color}>{children}</Header5>
        case "h6":
            return <Header6 size={size} color={color}>{children}</Header6>
        case "p":
            return <Paragraph size={size} color={color}>{children}</Paragraph>
        case "span":
            return <Wrapper size={size} color={color}>{children}</Wrapper>
        case "div":
            return <BLockWrapper size={size} color={color}>{children}</BLockWrapper>
    }
}