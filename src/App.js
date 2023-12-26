import './App.css';
import React from 'react';
import BoxTesting from './BoxTesting';
import UserListing from './UserListing';
import ProductListing from './component/ProductListing';

const App = () => {

  return (
    <>
      <div className="container">
        {/* <BoxTesting />
        <UserListing /> */}
        <ProductListing />      
      </div>
    </>
  );
}



export default App;
