import React, {Component, ReactNode} from "react";
import {StackWrapper} from "./Style.styles";

interface PropsInterface {
    alignment?: 'leading' | 'trailing' | 'center' | 'fill' | 'baseline';
    distribution?: 'equalSpacing' | 'leading' | 'trailing' | 'center' | 'fill' | 'fillEvery';
    children?: ReactNode | [ReactNode],
    spacing?: string
    wrap?: boolean
}

/**
 *
 */
export default class Stack extends Component<PropsInterface> {
    static Item = ({children}) =>
        <div>
            {children}
        </div>

    render() {
        const {children, distribution = 'leading', spacing = '0', alignment = 'center', wrap = false} = this.props;

        return (
            <StackWrapper distribution={distribution} spacing={spacing} alignment={alignment} wrap={wrap}>
                {children}
            </StackWrapper>
        )
    }
}
