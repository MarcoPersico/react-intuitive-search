import React from 'react';
import ListLoader from './ListLoader';

import './List.scss';

export default function List({ options, isLoading, onSelected }) {
  return (
    <div className='List_container fadeIn'>
      <div className='List_options'>
        <div className='List_buttonContainer'>
          {isLoading
            ? <ListLoader />
            : options.map(option => <button id='buttonList' onClick={onSelected} className='List_button fadeIn' key={option.id}>{option.name}</button>)}
        </div>
      </div>
      <span className='List_footer'>{isLoading ? '...loading...' : `${options.length} results were found`}</span>
    </div>
  );
}

