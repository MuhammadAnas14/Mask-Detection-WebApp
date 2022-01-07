import { BrowserRouter as Navigate, Route  } from 'react-router-dom'
import React from 'react';
import authentication from './auth';

function SecuredRoute({props,redirectTo}) {

      let data = authentication.getLogInStatus()
      return data ? <props.component {...data}></props.component> : <Navigate to={redirectTo} />;

}

export default SecuredRoute