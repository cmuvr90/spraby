import React, {FC, useState} from "react";
import {Wrapper, Header, Body} from "./Style.styles";

interface PropsInterface {
    items: { label: string, content: string }[];
}

/**
 *
 * @constructor
 */
export const Tabs: FC<PropsInterface> = ({items = []}) => {
    const [activeItem, setActiveItem] = useState(0);

    return <Wrapper>
        <Header>
            {
                items.map((i, index) => (
                    <div
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => setActiveItem(index)}>{i.label}
                    </div>
                ))
            }
        </Header>
        <Body>
            {
                items.map((i, index) => (
                    <div className={activeItem === index ? 'active' : ''}>{i.content}</div>
                ))
            }
        </Body>
    </Wrapper>
}