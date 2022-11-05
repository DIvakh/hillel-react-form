import React, { PureComponent } from 'react';

export default class Input extends PureComponent {
  render() {
    const { name, type, errorMsg, changeHandler, ...otherProps } = this.props;
    return (
      <div>
        <input
          name={name}
          type={type}
          onChange={changeHandler}
          {...otherProps}
        />
        <span>{errorMsg}</span>
      </div>
    );
  }
}
