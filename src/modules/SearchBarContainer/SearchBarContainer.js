import React from 'react';

import SearchBar from './SearchBar';
import List from './List';

export default function SearchBarContainer({ options, async, onAsyncRequest, isLoading }) {
  const [inputValue, setInputValue] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  const [listOptions, setListOptions] = React.useState(async ? [] : options);

  function handleFocus(value, event) {
    if (event.target.value.length) {
      return setIsFocused(value)
    }

    return async
      ? (
        setIsFocused(value),
        onAsyncRequest().then(res => setListOptions(res.data))
      )
      : (setIsFocused(value), setListOptions(options))
  }

  function handleBlur(value, event) {
    return event.relatedTarget
      ? event.relatedTarget.id === 'buttonList' ? null : setIsFocused(value)
      : setIsFocused(value)
  }

  function handleChange(value) {
    setInputValue(value);
    return async
      ? onAsyncRequest(value).then(res => {
        setListOptions(value.length ? res.data.filter(option => option.name.toLowerCase().includes(value.toLowerCase())) : res.data);
      })
      : (
        setListOptions(
          value.length
            ? options.filter(option => option.name.toLowerCase().includes(value.toLowerCase()))
            : options
        )
      )
  }

  function handleInputValue(event) {
    setIsFocused(false);
    handleChange(event.target.innerText);
    return setInputValue(event.target.innerText);
  }

  return (
    <div className='IntSearch_container'>
      <SearchBar onInputFocus={handleFocus} onInputBlur={handleBlur} onInputChange={handleChange} value={inputValue} />
      {isFocused ? <List options={listOptions} isLoading={isLoading} onSelected={handleInputValue} /> : null}
    </div>
  );
}
