// import authorsData from './authorsData.json';
// import yearsData from './yearsData.json';
// import genresData from './genresData.json';

function FilterPopup() {
    const content = [
        <div className="popup__text">Автор1</div>,
        <div className="popup__text">Автор2</div>,
        <div className="popup__text">Автор3</div>,
        <div className="popup__text">Автор4</div>,
        <div className="popup__text">Автор5</div>
    ]
    return (
        <div className="filter__popup">
            { content }
        </div>
    );
}

export default FilterPopup;