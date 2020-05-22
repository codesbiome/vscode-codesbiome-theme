import React from 'react';
import classnames from 'classnames';
import ButtonGroup from './ButtonGroup';

interface ButtonProps {
  /** Tint (Color) of Button */
  tint?: 'dark' | 'primary' | 'success' | 'error' | 'warning';
  /** Button is Disabled? */
  disabled?: boolean;
  /** Button Content */
  content?: string;
  /** Button Type  */
  type?: 'button' | 'submit' | 'link';
  /** Button URL  */
  url?: string;
  /** Button Outline (usually used with tint) */
  outline?: boolean;
}

const bibi: React.FC<HTMLAllCollection> = {};

export default class Button extends React.Component<ButtonProps> {
  static Group = ButtonGroup;

  render() {
    const {
      children,
      tint,
      disabled,
      content,
      type,
      url,
      outline,
    } = this.props;

    /** Element props */
    const elementProps = {
      className: classnames({
        'cbs-button': true,
        'cbs-button--tint': tint,
        ['cbs-button--tint-' + tint]: tint,
        'cbs-button--outline': outline,
      }),
      disabled,
      href: url,
      type: type === 'submit' ? type : undefined,
    };

    // Button type is link
    if (type === 'link')
      // Render anchor (a) element
      return React.createElement('a', elementProps, content ?? children);

    // Render button element
    return React.createElement('button', elementProps, content ?? children);
  }
}
