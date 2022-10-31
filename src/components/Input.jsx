import React, { PureComponent } from 'react';

export default class Input extends PureComponent {
  render() {
    const { name, type, changeHandler, ...otherProps } = this.props;
    return (
      <input name={name} type={type} onChange={changeHandler} {...otherProps} />
    );
  }
}
