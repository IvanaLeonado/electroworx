import React from 'react';
import '../css/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/fontawesome';

function Index() {
  return (
    <>
      <div className='main' style={{ 
      background: `url('/images/Header.png') center center/cover no-repeat`}}>
        <a href="/login">
          <h1 className="index">
            <FontAwesomeIcon icon={['fa', 'e']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 'bolt']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 'e']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 'c']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 't']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 'r']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 'o']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 'w']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 'o']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 'r']} fixedWidth/>
            <FontAwesomeIcon icon={['fa', 'x']} fixedWidth/>
              <h2>
                <FontAwesomeIcon icon={['fa', 's']} fixedWidth/>
                <FontAwesomeIcon icon={['fa', 'e']} fixedWidth/>
                <FontAwesomeIcon icon={['fa', 'r']} fixedWidth/>
                <FontAwesomeIcon icon={['fa', 'v']} fixedWidth/>
                <FontAwesomeIcon icon={['fa', 'i']} fixedWidth/>
                <FontAwesomeIcon icon={['fa', 'c']} fixedWidth/>
                <FontAwesomeIcon icon={['fa', 'e']} fixedWidth/>
                <FontAwesomeIcon icon={['fa', 's']} fixedWidth/>
              </h2>
            </h1>
        </a>
      </div>
    </>
  );
}

export default Index;