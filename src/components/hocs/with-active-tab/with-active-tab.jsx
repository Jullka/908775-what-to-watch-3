import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: 0
      };
      this._handleActiveTabChange = this._handleActiveTabChange.bind(this);
    }

    _handleActiveTabChange(tab) {
      this.setState({
        activeTab: tab
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onActiveTabChange={this._handleActiveTabChange}
        />
      );
    }
  }

  withActiveTab.propTypes = {
    activeTab: PropTypes.number,
    onActiveTabChange: PropTypes.func
  };

  return WithActiveTab;
};

export default withActiveTab;
