import React, {Component, ReactNode} from "react";
import {StackWrapper} from "./Style.styles";

interface PropsInterface {
    alignment?: 'leading' | 'trailing' | 'center' | 'fill' | 'baseline';
    distribution?: 'equalSpacing' | 'leading' | 'trailing' | 'center' | 'fill' | 'fillEvery';
    children?: ReactNode | [ReactNode],
    spacing?: string
}

/**
 *
 */
export default class Stack extends Component<PropsInterface> {
    static Item = ({children, distribution = 'leading', spacing = '0', alignment = 'center'}) =>
        <StackWrapper
            distribution={distribution}
            spacing={spacing}
            alignment={alignment}
        >
            {children}
        </StackWrapper>

    render() {
        const {children, distribution = 'leading', spacing = '0', alignment = 'center'} = this.props;

        return (
            <StackWrapper distribution={distribution} spacing={spacing} alignment={alignment}>
                {children}
            </StackWrapper>
        )
    }
}
