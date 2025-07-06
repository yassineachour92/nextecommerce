import React from 'react'
import { cn } from '@/lib/utils';

const ProductPrice = ({value,className}:{value:number,className?:string}) => {
 console.log('ProductPrice value', value);
  const [intValue, floatValue] = Number(value)?.toFixed(2).split('.');

    return (
    <p className={cn('text-2xl',className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
        <span className="text-xs align-super">.{floatValue}</span>
    </p>
  )
}

export default ProductPrice;
