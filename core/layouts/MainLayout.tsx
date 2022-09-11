import React from 'react';
import {Page} from '../../components/Page';
import {Menu} from '../../components/Menu';

/**
 * 
 * @param Template 
 * @returns 
 */
export const MainLayout = Template => props => {
    return <Page>
        <Menu/>
        <Template {...props}/>
    </Page>
}