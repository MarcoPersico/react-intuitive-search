import React from 'react';
import ListLoader from './ListLoader';

import './List.scss';

export default function List({ options, isLoading, onSelected }) {
  return (
    <div className='List_container List_container_styleable fadeIn'>
      <div className='List_options'>
        <div className='List_buttonContainer'>
          {isLoading
            ? <ListLoader />
            : options.map(option =>
              <button
                id='buttonList'
                onClick={onSelected}
                className='List_button List_button_styleable fadeIn'
                key={option.id}
              >
                {option.name}
              </button>
            )}
        </div>
      </div>
      <span className='List_footer'>{isLoading ? '...loading...' : `${options.length} results were found`}</span>
    </div>
  );
}

