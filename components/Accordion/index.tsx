import React, {FC} from "react";
import {AccordionWrapper} from "./Style.styles";
import {AccordionItem} from "./components/AccordionItem";

interface PropsInterface {
    items?: { key: string, title: string, content: string }[] | [],
    state?: 'open' | 'close'
}

/**
 *
 * @constructor
 */
export const Accordion: FC<PropsInterface> = ({items = [], state = 'close'}) => {

    return <AccordionWrapper>
        {
            items.map((item, i) => <AccordionItem key={i} item={item} state={state}/>)
        }
    </AccordionWrapper>
}