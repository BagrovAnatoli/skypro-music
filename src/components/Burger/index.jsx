import * as S from './styles';

const emptyArray = Array.from({length: 3});

function Burger({onClick}) {
    const lines = emptyArray.map((_, index) => <S.BurgerLine key={`${index}_line`}/>);

    return (
        <S.NavBurger onClick={onClick} aria-hidden="true">
            { lines }
        </S.NavBurger>
    );
}

export default Burger;