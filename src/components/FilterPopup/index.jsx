/* eslint-disable no-console */
import authorsData from '../../data/authorsData.json';
import yearsData from '../../data/yearsData.json';
import genresData from '../../data/genresData.json';
import * as S from './styles';

function FilterPopup({ isPopupVisible, filterBy }) {
  console.log(isPopupVisible);

  let content = '';

  switch (filterBy) {
    case 'author':
      content = authorsData.map((author) => (
        <S.Text key={author.id}>{author.author}</S.Text>
      ));
      break;
    case 'year':
      content = yearsData.map((year) => (
        <S.Text key={year.id}>{year.year}</S.Text>
      ));
      break;
    case 'genre':
      content = genresData.map((genre) => (
        <S.Text key={genre.id}>{genre.genre}</S.Text>
      ));
      break;
    default:
      content = 'Пусто';
      break;
  }

  return isPopupVisible ? <S.Popup>{content}</S.Popup> : null;
}

export default FilterPopup;
