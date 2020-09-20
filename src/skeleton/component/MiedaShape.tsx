import React from 'react';
import RoundShape from './RoundShape';
import TextBlock from './TextBlock';
import { joinClassNames } from './utils';

export type Props = {
  className: string,
  color: string,
  style:React.CSSProperties,
  rows:number
}

const display = {
  display: 'flex'
};

const MeidaShape: React.FC<Props> = ({
  className,
  color,
  style,
  rows
}) => {
  return <div className={joinClassNames('media-block', className)} style={display}>
    <RoundShape  className={className} style={{
      minHeight: 55, width: 55, minWidth: 55, marginRight: 10
    }} color={color}/>
    <TextBlock rows={rows}  className={className} style={style} color={color}/>
  </div>
}

export default MeidaShape;