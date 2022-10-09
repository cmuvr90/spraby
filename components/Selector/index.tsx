import React, {FC} from "react";
import {SelectorWrapper} from "./Style.styles";

interface PropsInterface {
    title?: string,
    items: { label: string, value: string }[],
    full?: boolean
}

/**
 *
 * @constructor
 */
export const Selector: FC<PropsInterface> = ({title = '', items = [], full = true}) => {
    return <SelectorWrapper full={full} title={title}>
        <select>
            {
                items.map(i => <option value={i.value}>{i.label}</option>)
            }
        </select>
    </SelectorWrapper>
}