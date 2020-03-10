import React from 'react';
import PropTypes from 'prop-types';
import withActiveTab from '../hocs/with-active-tab/with-active-tab.jsx';

const Tabs = (props) => {
  const {children, activeTab, onActiveTabChange} = props;
  // const tabs = [`Overview`, `Details`, `Reviews`];
  const tabItems = children.map((tab, i) => {
    return (
      <li
        key={i}
        className={`movie-nav__item ${i === activeTab ? `movie-nav__item--active` : ``}`}
        onClick={() => {
          onActiveTabChange(i);
        }}>
        <a href="#" className="movie-nav__link">{tab.props.name}</a>
      </li>
    );
  });

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabItems}
        </ul>
      </nav>
      {children[activeTab]}
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired
  ]).isRequired
};


export default withActiveTab(Tabs);
