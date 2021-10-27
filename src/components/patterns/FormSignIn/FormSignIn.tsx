import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

import globalDefinitions from '../../../config/globalDefinitions';
import { useIsMidOrHigerSizeScreen } from '../../../hooks/usefullHooks';
// import * as yup from 'yup';
import { loginService } from '../../../services/login/loginService';
import {
  AuthContext,
  SignInDataProps,
} from '../../wrappers/WebsitePage/context/AuthContext';

type TransitionProps = Omit<SlideProps, 'direction'>;

// const loginSchema = yup.object().shape({
//   usuario: yup
//     .string()
//     .required('"Usuario" é obrigatório')
//     .min(3, 'Preencha ao menos 3 caracteres'),
//   senha: yup
//     .string()
//     .required('"Senha" é obrigatória')
//     .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
// });
const LoginButton = styled(Button)`
  width: 15.2rem;
  height: 3rem;
  border-radius: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
`;

// interface FormSignInProps {
//   buttonChange: HTMLElement | null;
// }

export default function FormSignIn(): JSX.Element {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInDataProps>();

  // const [userSession, setUserSession] = useState({});
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const initialValues: SignInDataProps = {
    email: '',
    password: '',
  };

  // const router = useRouter();
  const { alertTimes } = globalDefinitions;

  const { signIn } = useContext(AuthContext);

  async function handleSignIn({ email, password }: SignInDataProps) {
    await signIn({ email, password });
  }

  // const onSubmit: SubmitHandler<SignInDataProps> = ({ email, password }) => {
  //   loginService
  //     .login({
  //       email, // 'omariosouto'
  //       password, // 'senhasegura'
  //     })
  //     .then((serverResponse) => {
  //       setUserSession(serverResponse);
  //       console.log('serverResponse', serverResponse);

  //       router.push('/app/profile');
  //     })
  //     .catch((err) => {
  //       // Desafio: Mostrar o erro na tela
  //       // eslint-disable-next-line no-console
  //       // setUserSession({ noUser: true });
  //       setOpenAlert(true);
  //       // console.error(err.status);
  //       // console.log('serverResponseError', err);
  //       console.log(err);
  //     });
  //   // .finally(() => {
  //   //   form.setIsFormDisabled(false);
  //   // });
  // };

  const handleCloseAlert = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const TransitionDown = (props: TransitionProps) => (
    <Slide {...props} direction="down" />
  );

  const isSmallScreen = useIsMidOrHigerSizeScreen() ? undefined : 'small';

  return (
    <>
      <form
        id="signInForm"
        className="signInForm"
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Typography
          variant="h3"
          color="textSecondary"
          style={{ marginBottom: '1rem' }}
        >
          Sign in
        </Typography>
        <Controller
          render={({ field }) => (
            <TextField
              label="E-mail"
              {...register('email', { required: true, minLength: 2 })}
              defaultValue={initialValues.email}
              variant="outlined"
              size={isSmallScreen}
              autoComplete="email"
              // name="email"
              style={{ marginBottom: '1rem' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
              {...field}
            />
          )}
          name="email"
          control={control}
        />
        {/* <TextField
        {...register('email')}
        variant="outlined"
        label="E-mail"
        size={isSmallScreen}
        name="email"
        style={{ marginBottom: '1rem' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineIcon color="disabled" />
            </InputAdornment>
          ),
        }}
      /> */}
        <Controller
          render={({ field }) => (
            <TextField
              defaultValue={initialValues.password}
              variant="outlined"
              label="Senha"
              size={isSmallScreen}
              autoComplete="current-password"
              style={{ marginBottom: '1rem' }}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
              {...field}
            />
          )}
          name="password"
          control={control}
        />
        {/* <TextField
        {...register('password')}
        variant="outlined"
        label="Senha"
        size={isSmallScreen}
        name="password"
        style={{ marginBottom: '1rem' }}
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon color="disabled" />
            </InputAdornment>
          ),
        }}
      /> */}
        <LoginButton
          variant="contained"
          color="primary"
          type="submit"
          value="Login"
        >
          Login
        </LoginButton>
      </form>

      <Snackbar
        id="loginError"
        open={openAlert}
        autoHideDuration={alertTimes.long}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleCloseAlert}
        TransitionComponent={TransitionDown}
      >
        <Alert severity="error" variant="filled" onClose={handleCloseAlert}>
          <AlertTitle>Erro de login</AlertTitle>
          Usuário ou senha inválidos
        </Alert>
      </Snackbar>
    </>
  );
}
