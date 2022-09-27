import React, {FC} from "react";
import {FilterWrapper, FilterItem} from "./Style.styles";
import {Checkbox} from "../Checkbox";
import {Radio} from "../Radio";

interface PropsInterface {
    filter?: {
        title: string,
        type: string,
        key: string,
        values?: {
            title: string,
            value: string
        }[]
    }[]
}

/**
 *
 * @constructor
 */
export const Filter: FC<PropsInterface> = ({filter = []}) => {
    return <FilterWrapper>
        {
            filter.map(i => {
                return (
                    <FilterItem>
                        <h3>{i.title}</h3>
                        <ul>
                            {
                                i.values.map(value => (
                                    <li>
                                        {
                                            i.type === 'checkbox' && <Checkbox label={value.title}/>
                                        }
                                        {
                                            i.type === 'radio' && <Radio label={value.title} name={i.key}/>
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </FilterItem>
                )
            })
        }
    </FilterWrapper>
}