import React, {FC} from "react";
import {BadgeWrapper} from "./Style.styles";
import {Text} from "../Text";

interface PropsInterface {
    status?: 'info' | 'warning' | 'alert' | 'success',
    children?: string
}

/**
 *
 * @constructor
 */
export const Badge: FC<PropsInterface> = ({status = 'info', children}) => {
    return <BadgeWrapper status={status}>
        <Text size={'0.857rem'}>{children}</Text>
    </BadgeWrapper>
}