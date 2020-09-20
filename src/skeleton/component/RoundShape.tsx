import React from 'react'
import { joinClassNames } from './utils';

export type Props = {
  className: string,
  style: React.CSSProperties,
  color: string
}

const RoundShape: React.FC<Props> = ({
  className,
  style,
  color
}) => {

  const defaultStyles = {
    backgroundColor: color,
    borderRadius: '500rem',
    width: '100%',
    height: '100%'
  }
  return <div className={joinClassNames('round-shape',className)}
    style={{...defaultStyles,...style}} color={color}
  />
}

export default RoundShape;