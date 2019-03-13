export const SELECT_TAB = 'SELECT_TAB';
export const selectTab = tabId => ({
    type: SELECT_TAB,
    tabId
})


export const SHOW_TABS = 'SHOW_TABS';
export const showTabs = (...tabsIds) => {
    const tabsToShow = {}
    tabsIds.forEach(element => {
        tabsToShow[element] = true
    })
    return {
        type: SHOW_TABS,
        tabsToShow
    }
}