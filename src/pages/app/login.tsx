/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '@material-ui/core/Button';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
// import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import clsx from 'clsx';
import { useState } from 'react';

import FormSignIn from '../../components/patterns/FormSignIn/FormSignIn';
import FormSignUp from '../../components/patterns/FormSignUp/FormSignUp';
// import FormSignIn from '../../components/patterns/FormLogin/index';
// import { AuthContext } from '../../components/wrappers/WebsitePage/context/AuthContext';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc/index';

const PageLogin = (): JSX.Element => {
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);

  const toggleSignMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={clsx('container', isSignUpMode && 'sign-up-mode')}>
      <div className="forms-container">
        <div className="signin-signup">
          <FormSignIn />

          <FormSignUp setIsSignUpMode={setIsSignUpMode} />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <Typography variant="h3">Novo aqui?</Typography>
            <Typography variant="body1">Faça seu cadastro</Typography>
            <Button
              id="singUpButton"
              variant="outlined"
              style={{
                // borderWidth: 3,
                border: 'solid 3px white',
                color: 'white',
                borderRadius: 20,
                padding: '6px 30px',
              }}
              // value="up"
              onClick={toggleSignMode}
            >
              Sign up
            </Button>
          </div>
          <img src="/images/signup.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <Typography variant="h3">Já é um de nós?</Typography>
            <Typography variant="body1">Faça o login</Typography>
            <Button
              id="singInButton"
              variant="outlined"
              style={{
                border: 'solid 3px white',
                color: 'white',
                borderRadius: 20,
                padding: '6px 30px',
              }}
              // value="up"
              onClick={toggleSignMode}
            >
              Sign in
            </Button>
          </div>
          <img src="/images/login.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

// export default PageLogin;

export default websitePageHOC(PageLogin, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
  },
});

// export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
//   // const apiClient = getAPIClient(ctx);
//   const { 'nextauth.token': token } = parseCookies(ctx);

//   if (token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   // await apiClient.get('/users');

//   return {
//     props: {},
//   };
// };
