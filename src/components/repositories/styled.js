import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 100%;
margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`

margin: 4px;
padding: 8px 8px 0;
user-select: none;
cursor: pointer;
z-index: 0;
box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);

&:focus {
    outline: none;
}

&.is-selected {
    border-radius: 8px;
    border: 0.1em solid #CCC;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom: 10px solid white;
    box-shadow: 5px -5px 5px -5px #333;
}

`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
padding: 8px;
border: 1px solid #CCC;
box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.12);
display: none;
margin-top: -9px;
border-radius: 8px;
z-index: -1;
box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);

&.is-selected {
    display: block;

}
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

export const WrapperRect = styled.div`
border: 1px solid #CCC;
height: 30px;
width: 30px;
`
