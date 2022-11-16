import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Container, * as S from './styles';
import logo from '../../img/logo-black.png';
import { userSelector,
    userLoadingSelector,
    // userErrorSelector,
    // userErrorMessageSelector,
    userErrorResponseDataSelector,
    allErrorsSelector } from '../../store/selectors/user';
import {login} from '../../store/actions/thunks/user';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const EMAIL_FIELD_NAME = 'email';
    const PASSWORD_FIELD_NAME = 'password';

    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const loading = useSelector(userLoadingSelector);
    const errorData = useSelector(userErrorResponseDataSelector);
    const errorDescriptions = useSelector(allErrorsSelector);

    console.log(user);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(`email: ${email} пароль: ${password}`);
        dispatch(login(email, password));
        setEmail('');
        setPassword('');
    }

    const redirectToSignin = () => {
        navigate("/signup");
    };

    return (
        <Container>
            <S.FullHight>
                <S.Form onSubmit={onFormSubmit}>
                    <S.LogoImage src={logo} alt="логотип" />
                    <S.Input onChange={onEmailChange} name={EMAIL_FIELD_NAME} type="text" placeholder="Email" />
                    <S.Input onChange={onPasswordChange} name={PASSWORD_FIELD_NAME} type="password" placeholder="Пароль" />
                    <S.PrimeButton>Войти</S.PrimeButton>
                    <S.SimpleButton type="button" onClick={redirectToSignin}>Зарегистрироваться</S.SimpleButton>
                    { loading && <S.Loading>Отправка данных</S.Loading> }
                    { errorData
                        && errorDescriptions.map((description, index) => <S.Error key={index}>{description}</S.Error>)
                    }
                </S.Form>
            </S.FullHight>
        </Container>
    );
}