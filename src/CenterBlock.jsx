import Search from './Search';
import Filter from './Filter';
import Content from './Content';

function CenterBlock() {
    return (
        <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <Content />
        </div>
    );
}

export default CenterBlock;