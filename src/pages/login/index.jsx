import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Container, * as S from './styles';
import logo from '../../img/logo-black.png';

export function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const LOGIN_FIELD_NAME = 'login';
    const PASSWORD_FIELD_NAME = 'password';

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(`логин: ${login} пароль: ${password}`);
    }

    const redirectToSignin = () => {
        navigate("/signup");
    };

    return (
        <Container>
            <S.FullHight>
                <S.Form onSubmit={onFormSubmit}>
                    <S.LogoImage src={logo} alt="логотип" />
                    <S.Input onChange={onLoginChange} name={LOGIN_FIELD_NAME} type="text" placeholder="Логин" />
                    <S.Input onChange={onPasswordChange} name={PASSWORD_FIELD_NAME} type="password" placeholder="Пароль" />
                    <S.PrimeButton>Войти</S.PrimeButton>
                    <S.SimpleButton type="button" onClick={redirectToSignin}>Зарегистрироваться</S.SimpleButton>
                </S.Form>
            </S.FullHight>
        </Container>
    );
}