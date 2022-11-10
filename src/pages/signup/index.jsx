import Container from './styles';
import * as S from  '../login/styles';
import logo from '../../img/logo-black.png';

export function Signup() {
    return (
        <Container>
            <S.FullHight>
                <S.Form>
                    <S.LogoImage src={logo} alt="логотип" />
                    <S.Input type="text" placeholder="Логин" />
                    <S.Input type="text" placeholder="Email" />
                    <S.Input type="password" placeholder="Пароль" />
                    <S.Input type="password" placeholder="Повторите пароль" />
                    <S.PrimeButton>Зарегистрироваться</S.PrimeButton>
                </S.Form>
            </S.FullHight>
        </Container>
    );
}