import React, {FC} from "react";
import {HeaderPanelWrapper} from "./Style.styles";
import {TextInput} from "../TextInput";
import {Button} from "../Button";
import {MainLogo} from "../MainLogo";
import {ButtonGroup} from "../ButtonGroup";
import {Link} from "../Link";
import Stack from "../Stack";
import {LoupeIcon, HeartIcon, CartIcon} from "../../icons";

interface PropsInterface {
}

/**
 *
 * @constructor
 */
export const HeaderPanel: FC<PropsInterface> = ({}) => {
    return <HeaderPanelWrapper>
        <Stack distribution={'fill'} spacing={'40px'}>
            <MainLogo/>
            <TextInput
                placeholder={'Найди что-нибудь отличное...'}
                prefix={<LoupeIcon/>}
                suffix={<Button size={'small'}>Найти</Button>}
                onChange={v => console.log(v)}
            />
            <ButtonGroup>
                <Link>Регистрация</Link>
                <Link>Войти</Link>
            </ButtonGroup>
            <Stack.Item>
                <Stack spacing={'25px'}>
                    <HeartIcon/>
                    <CartIcon/>
                </Stack>
            </Stack.Item>
        </Stack>
    </HeaderPanelWrapper>
}