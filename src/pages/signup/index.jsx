/* eslint-disable no-debugger */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Container from './styles';
import * as S from  '../login/styles';
import logo from '../../img/logo-black.png';
import { userSelector,
    userLoadingSelector,
    // userErrorSelector,
    // userErrorMessageSelector,
    userErrorResponseDataSelector,
    allErrorsSelector } from '../../store/selectors/user';

// import {SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR} from '../../store/actions/types/user';
// import {signupStartAC, signupSuccessAC, signupErrorAC} from '../../store/actions/creators/user';
import {signup} from '../../store/actions/thunks/user';

export function Signup() {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const LOGIN_FIELD_NAME = 'login';
    const EMAIL_FIELD_NAME = 'email';
    const PASSWORD_FIELD_NAME = 'password';
    const REPEAT_PASSWORD_FIELD_NAME = 'repeatPassword';

    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const loading = useSelector(userLoadingSelector);
    const errorData = useSelector(userErrorResponseDataSelector);
    const errorDescriptions = useSelector(allErrorsSelector);


    useEffect(() => {
        if(password !== repeatPassword) {
            console.log('пароли не совпадают');
        }
    }, [repeatPassword]);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    // if (error) {
    //     return <p>{error.message}</p>;
    // }

    console.log(user);

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onRepaatPasswordChange = (e) => {
        setRepeatPassword(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(`логин: ${login} email: ${email} пароль: ${password} пароль2: ${repeatPassword}`);
        dispatch(signup(login, email, password));
        setLogin('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');
    }

    return (
        <Container>
            <S.FullHight>
                <S.Form onSubmit={onFormSubmit}>
                    <S.LogoImage src={logo} alt="логотип" />
                    <S.Input onChange={onLoginChange} name={LOGIN_FIELD_NAME} type="text" placeholder="Логин" />
                    <S.Input onChange={onEmailChange} name={EMAIL_FIELD_NAME} type="text" placeholder="Email" />
                    <S.Input onChange={onPasswordChange} name={PASSWORD_FIELD_NAME} type="password" placeholder="Пароль" />
                    <S.Input onChange={onRepaatPasswordChange} name={REPEAT_PASSWORD_FIELD_NAME} type="password" placeholder="Повторите пароль" />
                    <S.PrimeButton>Зарегистрироваться</S.PrimeButton>
                    { loading && <S.Loading>Отправка данных</S.Loading> }
                    { errorData
                        && errorDescriptions.map((description, index) => <S.Error key={index}>{description}</S.Error>)
                    }
                    
                </S.Form>
            </S.FullHight>
        </Container>
    );
}