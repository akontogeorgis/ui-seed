import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setTabAction, fetchTranslationAction } from '../../actions/';

import {
    selectTranslation,
    selectActiveTab
} from '../../selectors';

const Home = () => {

    const dispatch = useDispatch();
    const setTab = (tab) => dispatch(setTabAction(tab));
    const fetchTranslation = (language) => dispatch(fetchTranslationAction(language));

    useEffect(() => {
        fetchTranslation('EN');
    }, []);

    const activeTab = selectActiveTab();
    const translation  = selectTranslation();

    const changeTab = (selectedTab) => activeTab !== selectedTab ? setTab(selectedTab) : null;

    console.log(translation);

    return (
        <>
            <section className="main-content-area">
                <h2 className="main-header"> I am your template now! </h2>
                <button onClick={() => changeTab(activeTab.split('').reverse().join(''))}> {activeTab} </button>
            </section>
        </>
    );
};

export default Home;
