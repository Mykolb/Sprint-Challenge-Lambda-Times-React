import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    const isActive = props.tab === props.selectedTab

  return (
    <div
      className={`tab ${isActive ? `active-tab` : ''}`}
      onClick={() => props.selectTabHandler(props.tab)}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.


Tab.propTypes = {
  Tab: PropTypes.shape({
  selectTabHandler: PropTypes.symbol.isRequired,
  tab: PropTypes.array.isRequired,
  selectedTab: PropTypes.array.isRequired
})
}


export default Tab;

//If tab equal to isActive, meaning tab = selected tab, then className will equal active tab. If it's not true then className equals tab.