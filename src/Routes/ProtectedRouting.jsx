import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


function Protected(props) {

  const Navigate = useNavigate()
  const { Component } = props;

  React.useEffect(() => {
    const cookies = new Cookies();
    const login = cookies.get("Token_access")
    if (!login) {

      Navigate("/")

    }
    else {

      if (login) {
        Navigate("/dashboard")
      }
    }

  }, [Component, Navigate])
  return (

    <div><Component /></div>
  )
}
export default Protected;