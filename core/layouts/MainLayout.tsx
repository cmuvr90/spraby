import React from 'react';
import {Page} from '../../components/Page';
import {Menu} from '../../components/Menu';
import {MainWrapper} from "../../components/MainWrapper";
import {TopPanel} from "../../components/TopPanel";

/**
 *
 * @param Template
 * @returns
 */
export const MainLayout = Template => props => {
    return <Page>
        <MainWrapper>
            <TopPanel description={'Ремесленнику оплачивается каждая покупка | Скидка 40% на наклейки, блокноты, бутыли для воды и кружки для путешествий - распродажа'}/>
            <Menu/>
            <Template {...props}/>
        </MainWrapper>
    </Page>
}