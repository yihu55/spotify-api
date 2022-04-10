import './App.css';
import { useEffect, useState } from 'react';
import PlayButton from './PlayButton';

function App() {
  const [albums, setAlbums] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const url = 'https://api.spotify.com/v1/browse/new-releases';
    const token = 'xxx';
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.albums.items);
      });
  }

  return (
    <div className='grid'>
      {albums &&
        albums.map((album, i) => {
          return (
            <div className='card' key={i}>
              <img src={album.images[0].url} />
              <div className='card-overlay'>
                <div className='text-box'>
                  <p>{album.name}</p>
                  <p>{album.artists[0].name}</p>
                  <PlayButton />
                  <a href={album.external_urls.spotify} target='_blank'>
                    play
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
