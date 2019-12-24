// import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

export const translationSelector = (state) => state.getIn(['app', 'translation']);

export const selectTranslation = () => useSelector(translationSelector);

export const activeTabSelector = (state) => state.getIn(['app', 'activeTab']);

export const selectActiveTab = () => useSelector(activeTabSelector);
