import React from 'react';
import { joinClassNames } from './component/utils';
import * as placeholders from './component';
import './index.css';

const Skeleton = ({
  ready,
  children,
  type = 'text',
  rows = 3,
  color = '#CDCDCD',
  showLoadingAnimation = false,
  className = '',
  ...rest
}) => {
  const Placeholder = placeholders[type];
  const getFiller = () => {
    const classes = showLoadingAnimation ?
      joinClassNames('show-loading-animation', className) : className;
    return  <Placeholder {...rest} color={color} rows={rows} className={classes}/>
  }
  return ready ? children as React.ReactElement : getFiller();
}

export default Skeleton;
