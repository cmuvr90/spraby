import React, {Component, FC, ReactNode} from "react";
import {LayoutWrapper, SectionWrapper} from "./Style.styles";

interface PropsInterface {
    columns?: string[] | number[];
    gap?: string;
    unit?: string,
    children?: ReactNode | [ReactNode],
}

/**
 *
 */
export default class Layout extends Component<PropsInterface> {
    static Section = ({children}: { children?: any }) =>
        <SectionWrapper>
            {children}
        </SectionWrapper>

    render() {
        const {gap = '32px', children, columns = [1], unit = 'fr'} = this.props;
        return <LayoutWrapper gap={gap} columns={columns} unit={unit}>
            {children}
        </LayoutWrapper>
    }
}