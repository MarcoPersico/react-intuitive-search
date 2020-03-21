import React from 'react';
import './SearchBar.scss';

export default function SearchBar({ onInputFocus, onInputBlur, onInputChange, value }) {
  return (
    <div className='SearchBar_container'>
      <input
        className='SearchBar_input'
        type='text'
        value={value}
        placeholder='Insert search value'
        onFocus={(event) => onInputFocus(true, event)}
        onBlur={(event) => onInputBlur(false, event)}
        onChange={event => onInputChange(event.target.value)}
      />
      <i className='SearchBar_icon gg-search' />
    </div>
  );
}