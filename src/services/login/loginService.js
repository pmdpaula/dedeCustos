/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { destroyCookie, getCookie, setCookie } from 'nookies';

// import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN';
export const LOGIN_COOKIE_USER_DATA = 'LOGIN_COOKIE_USER_DATA';

export const loginService = {
  async login(
    { email, password },
    setCookieModule = setCookie,
    HttpClientModule = HttpClient,
  ) {
    return HttpClientModule(`${process.env.NEXT_PUBLIC_JWT_SERVER}/login`, {
      method: 'POST',
      body: {
        email,
        password,
      },
    }).then((responseConverted) => {
      console.log('responseConvertedLogin', responseConverted);
      const { token } = responseConverted;
      const hasToken = token;

      if (!hasToken) {
        // throw new Error('Failed to login');
        throw new Error(responseConverted);
        // return responseConverted;
      }
      const DAY_IN_SECONDS = 86400;
      // Salvar o Token
      setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      });
      return {
        token,
      };
    });
    // .catch((err) => {
    //   throw new Error(err);
    // });
  },

  async logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, { path: '/' });
  },

  // async getUserInfo(
  //   { email },
  //   getCookieModule = getCookie,
  //   HttpClientModule = HttpClient,
  // ) {
  //   return HttpClientModule(`${process.env.NEXT_PUBLIC_JWT_SERVER}/welcome`, {
  //     method: 'POST',
  //     body: {
  //       email,
  //     },
  //   }).then((responseConverted) => {
  //     console.log('responseConverted', responseConverted);
  //     const { token } = responseConverted;
  //     const hasToken = token;

  //     if (!hasToken) {
  //       // throw new Error('Failed to login');
  //       throw new Error(responseConverted);
  //       // return responseConverted;
  //     }
  //     const DAY_IN_SECONDS = 86400;
  //     // Salvar o Token
  //     getCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
  //       path: '/',
  //       maxAge: DAY_IN_SECONDS * 7,
  //     });
  //     return {
  //       token,
  //     };
  //   });
  //   console.log(ctx);
  // },
};
