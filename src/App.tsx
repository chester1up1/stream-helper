import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { RBlock } from './components/RBlock';
import { ContentZone } from './components/ContentZone';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const TWITCH_CLIENT_ID = 'mrsid18sqda54o6ey0ug0hvaipq7ra';

interface TwitchClientInfo {
  access_token: string;
  id_token: string;
  scope: string;
  token_type: string;
  channel_id?: string;
}

const getInfo = () => {
  return new Promise<TwitchClientInfo>((resolve, reject) => {
    const hash = window.location.hash.substr(1);
    const result = hash.split('&').reduce(function (res: any, item) {
      const parts = item.split('=');
      res[parts[0]] = parts[1];
      return res;
    }, {});
    resolve(result);
  });
};

function App() {
  const [twitchClientInfo, setTwitchClientInfo] =
    useState<TwitchClientInfo | null>(null);

  useEffect(() => {
    getInfo().then((data) => {
      const decoded: any = jwt_decode(data.id_token);
      setTwitchClientInfo({
        ...data,
        channel_id: decoded.sub,
      });
    });
  }, []);

  useEffect(() => {
    console.log('twitchClientInfo: ', twitchClientInfo);
  }, [twitchClientInfo]);

  const handleClick = () => {
    const url = `https://api.twitch.tv/helix/channels?broadcaster_id=${twitchClientInfo?.channel_id}`;
    const options = {
      headers: {
        Authorization: `Bearer ${twitchClientInfo?.access_token}`,
        'Client-Id': TWITCH_CLIENT_ID,
        'Content-Type': 'application/json',
      },
      data: {
        game_id: '33214',
        title:
          'there are helicopters in the game? REASON TO PLAY FORTNITE found',
        broadcaster_language: 'en',
      },
    };
    axios.patch(url, options);
    axios.patch(url, options.data, { headers: options.headers });
  };

  return (
    <div className="App">
      <ContentZone>
        <RBlock>
          <div>R-BLOCK</div>
        </RBlock>
        <a
          href={`https://id.twitch.tv/oauth2/authorize?client_id=${TWITCH_CLIENT_ID}&redirect_uri=http://localhost:3000/&response_type=token+id_token&scope=channel:manage:broadcast+openid`}
        >
          twitch connect
        </a>
        <button onClick={handleClick}>patch info</button>
      </ContentZone>
    </div>
  );
}

export default App;

// curl -X PATCH 'https://api.twitch.tv/helix/channels?broadcaster_id=41245072' \
// -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
// -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \
// -H 'Content-Type: application/json' \
// --data-raw '{"game_id":"33214", "title":"there are helicopters in the game? REASON TO PLAY FORTNITE found", "broadcaster_language":"en"}'

// curl -X GET 'https://api.twitch.tv/helix/users?login=twitchdev' \
// -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
// -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz'
