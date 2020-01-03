import React from 'react';

const authContext = React.createContext({
  authencated: false,
  login: () => {}
});

export default authContext;
