import React from 'react';
import './ListLoader.scss';

export default function ListLoader() {
  return (
    <div className='ListLoader_container'>
      <div className='ListLoader_loader fill' />
      <div className='ListLoader_loader fill' />
      <div className='ListLoader_loader fill' />
    </div>
  );
}
