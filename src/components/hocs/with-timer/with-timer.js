import React, {PureComponent} from 'react';

export const withTimer = (Component)=> {
  return class WithTimer extends PureComponent {
    constructor(props) {
      super(props);

      this._timerdId = null;

      this._setTimeout = this._setTimeout.bind(this);
      this._clearTimeout = this._clearTimeout.bind(this);
    }

    componentWillUnmount() {
      this._clearTimeout();
    }

    render() {
      return (
        <Component
          {...this.props}
          setTimeout={this._setTimeout}
          clearTimeout={this._clearTimeout}
        />
      );
    }

    _setTimeout(callback, time) {
      this._timerdId = setTimeout(callback, time);
    }

    _clearTimeout() {
      if (this._timerdId) {
        clearTimeout(this._timerdId);
        this._timerdId = null;
      }
    }
  };
};
