import React from 'react';
import data from '../utils/data';


function Sizing({product}) {
    for (let i = 0; i < product.sizeAvailable.length; i++) {
       sizes.push('<div class="card">' + product.sizeAvailable[i] + '</div>')
    } 

    return (<div className='card'>{sizes}</div>)
    
  }

export default Sizing