import { useEffect, useState } from 'react';
import SearchResult, {
  SearchResultProps,
} from '../../components/SearchResult/SearchResult';
import styles from './Search.module.css';
import OverlayMenu from '../../components/OverlayMenu/OverlayMenu';
import { Link } from 'react-router-dom';

function Search(): JSX.Element {
  const [results, setResults] = useState<SearchResultProps[] | null>([]);
  const [query, setQuery] = useState<string | ''>('');

  const getSeries = async () => {
    const response = await fetch(`http://localhost:3001/api/search/${query}`);
    const data = await response.json();
    console.log(data);
    setResults(data.results);
  };

  useEffect(() => {
    getSeries();
  }, [query]);

  return (
    <>
      <OverlayMenu />
      <form className={styles.search}>
        <input
          type="search"
          placeholder="Search Series"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </form>
      <div>
        {query &&
          results?.map((result) => (
            // eslint-disable-next-line react/jsx-key
            <Link
              style={{ textDecoration: 'none' }}
              to={`/search/${result.id}`}
            >
              <SearchResult
                poster_path={result.poster_path}
                name={result.name}
                vote_average={result.vote_average}
                key={result.id}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

export default Search;
