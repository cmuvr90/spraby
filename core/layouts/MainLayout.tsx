import React from 'react';
import {Page} from '../../components/Page';
import {MainWrapper} from "../../components/MainWrapper";
import {TopPanel} from "../../components/TopPanel";
import {HeaderPanel} from "../../components/HeaderPanel";

/**
 *
 * @param Template
 * @returns
 */
export const MainLayout = Template => props => {
    return <Page>
        <MainWrapper>
            <TopPanel
                description={'Ремесленнику оплачивается каждая покупка | Скидка 40% на наклейки, блокноты, бутыли для воды и кружки для путешествий - распродажа'}/>

            <HeaderPanel/>
            <Template {...props}/>
        </MainWrapper>
    </Page>
}