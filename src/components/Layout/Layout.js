import React from 'react';
import Appbar from '../Appbar/Appbar';

const styles = {
  maxWidth: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 12,
  paddingLeft: 12,
};

const Layout = ({children}) => (
  <div style = {styles}>
    <Appbar />
    {children}
  </div>
);

export default Layout;