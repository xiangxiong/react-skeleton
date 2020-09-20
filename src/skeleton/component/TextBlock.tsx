import * as React from 'react';
import TextRow from './TextRow';
import { joinClassNames } from './utils';

const defaultWidths = [97, 100, 94, 90, 98, 95, 98, 40];

export type Props = {
  rows: number;
  className?: string,
  color: string,
  lineSpacing?: string | number;
  style?: React.CSSProperties,
  widths?: number[]
}

const TextBlock: React.FC<Props> = ({
  rows,
  className,
  color,
  lineSpacing,
  widths = defaultWidths
}) => {
  const getRowStyle = (i: number) => {
    return {
      maxHeight: `${100 / (rows * 2 - 1)}%`,
      width: `${widths[(i + widths.length) % widths.length]}%`
    }
  }
  
  return (
    <div className={joinClassNames('text-block', className)} style={{ width: '100%' }}>
      {
        Array.apply(null, Array(rows)).map((item, i)=>(
          <TextRow
            className={className}
            color={color}
            style={getRowStyle(i)}
            lineSpacing={ i !== 0 ? lineSpacing : 0}
            key={i}
          />
        ))
      }
    </div>
  )
}

export default TextBlock;