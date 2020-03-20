import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: 0
      };
      this._handleActiveTabChange = this._handleActiveItemChange.bind(this);
    }

    _handleActiveItemChange(activeItem) {
      this.setState({
        activeItem
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActiveItemChange={this._handleActiveItemChange}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
