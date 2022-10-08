import React, {FC, useEffect, useRef, useState} from "react";
import {Header, Icon, Body} from "../Style.styles";
import {Text} from "../../Text";
import {ChevronUpIcon} from "../../../icons";

interface PropsInterface {
    item: { key: string, title: string, content: string },
    state?: 'open' | 'close'
}

/**
 *
 * @constructor
 */
export const AccordionItem: FC<PropsInterface> = ({item, state = 'close'}) => {
    const bodyEl = useRef(null);

    const [currentState, setCurrentState] = useState(state);
    const [heightBody, setHeightBody] = useState(state === 'open' ? '100px' : '0px');

    useEffect(() => {
        window.onresize = () => updateBodyHeight();
        updateBodyHeight();
    }, []);

    const onClick = () => {
        setCurrentState(i => i === 'open' ? 'close' : 'open');
        updateBodyHeight();
    }

    const updateBodyHeight = () => {
        setCurrentState(v => {
            setHeightBody(v === 'open' ? `${bodyEl.current.querySelector('div').clientHeight}px` : '0');
            return v;
        });
    }

    return <div>
        <Header onClick={onClick}>
            <Text size={12}>{item.title}</Text>
            <div>
                <Icon state={currentState}>
                    <ChevronUpIcon width={'16px'} height={'16px'}/>
                </Icon>
            </div>
        </Header>
        <Body height={heightBody} ref={bodyEl}>
            <Text size={12} as={'div'}>{item.content}</Text>
        </Body>
    </div>
}