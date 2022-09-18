import React, {FC, FormEventHandler, ReactNode} from "react";
import {TextInputWrapper, TextInputBody, TextInputPrefix, TextInputSuffix} from "./Style.styles";

interface PropsInterface {
    prefix?: ReactNode,
    suffix?: ReactNode,
    placeholder?: string,
    label?: string
    onChange?: FormEventHandler<HTMLInputElement>
}

/**
 *
 * @param prefix
 * @param suffix
 * @param placeholder
 * @param label
 * @param onChange
 * @constructor
 */
export const TextInput: FC<PropsInterface> = ({
    prefix = undefined,
    suffix = undefined,
    placeholder = undefined,
    label = undefined,
    onChange = undefined
}) => {

    /**
     *
     */
    const onInputEvent = onChange ? e => onChange(e.target.value) : null;

    /**
     *
     */
    const body = <TextInputBody>
        <TextInputPrefix>
            {prefix}
        </TextInputPrefix>
        <input
            type={'text'}
            placeholder={placeholder}
            onInput={onInputEvent}
        />
        <TextInputSuffix>
            {suffix}
        </TextInputSuffix>
    </TextInputBody>;

    return <TextInputWrapper>
        {
            label ? <label><span>{label}</span>{body}</label> : body
        }
    </TextInputWrapper>
}