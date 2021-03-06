import React, { useState, useContext } from 'react';
import _ from 'lodash';

import UserProvider from '../contexts/UserProvider';

import {
  Header,
  Input,
  Button,
  P,
  A,
  LoginButtons,
} from '../styled-components/forms.styled-components';

import LoginButton from '../components/UI/buttons/ThirdPartyLoginButton.component';

const Login = (props) => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const userInfo = useContext(UserProvider.context);
  if (!_.isEmpty(userInfo)) {
    const {
      history,
    } = props;
    history.push('/');
  }

  const onChangeEmail = (e) => {
    setLoginState({
      email: e.target.value,
    });
  };

  const onChangePassword = (e) => {
    setLoginState({
      password: e.target.value,
    });
  };

  const loginUser = async (loginInfo) => {
    const response = await fetch(
      'http://localhost:5000/users/login',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      },
    );
    const data = await response.json();
    return data;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginState;

    const loginInfo = {
      email,
      password,
    };

    loginUser(loginInfo)
      .then((res) => {
        console.log(res.json());
      })
      .catch((err) => console.log(err));
  };

  const { email, password } = loginState;
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-lg-4 col-md-6 col-sm-8 col-12 m-auto">
          <div className="form-container">
            <Header className="text-center mb-3">
              <i className="fas fa-sign-in-alt" />
              {' '}
                Login
            </Header>
            <LoginButtons>
              <li
                style={{
                  listStyle: 'none',
                }}
              >
                <LoginButton
                  icon="google"
                  backgroundColor="#4285f4"
                  endpoint="//localhost:5000/auth/google"
                  providerName="Google"
                />
              </li>
              <li
                style={{
                  listStyle: 'none',
                }}
              >
                <LoginButton
                  icon="github"
                  backgroundColor="#333"
                  endpoint="http://localhost:5000/auth/github"
                  providerName="Github"
                />
              </li>
              <li
                style={{
                  listStyle: 'none',
                }}
              >
                <LoginButton
                  icon="facebook"
                  backgroundColor="#3a5797"
                  endpoint="http://localhost:5000/auth/facebook"
                  providerName="Facebook"
                />
              </li>
            </LoginButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
