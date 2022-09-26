import React, {FC} from "react";
import {FilterWrapper, FilterItem} from "./Style.styles";

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
                                        <label>
                                            <input type={i.type} name={i.key}/>
                                            <span>{value.title}</span>
                                        </label>
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