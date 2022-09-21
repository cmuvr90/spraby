import React from 'react';
import {Page} from '../../components/Page';
import {MainWrapper} from "../../components/MainWrapper";
import {TopPanel} from "../../components/TopPanel";
import {HeaderPanel} from "../../components/HeaderPanel";
import {Menu} from "../../components/Menu";
import {Header} from "../../components/Header";
import {Body} from "../../components/Body";

/**
 *
 * @param Template
 * @returns
 */
export const MainLayout = Template => props => {
    return <Page>
        <Header>
            <MainWrapper>
                <TopPanel
                    description={'Ремесленнику оплачивается каждая покупка | Скидка 40% на наклейки, блокноты, бутыли для воды и кружки для путешествий - распродажа'}
                />
                <HeaderPanel/>
                <Menu/>
            </MainWrapper>
        </Header>
        <Body>
            <MainWrapper>
                <Template {...props}/>
            </MainWrapper>
        </Body>
    </Page>
}