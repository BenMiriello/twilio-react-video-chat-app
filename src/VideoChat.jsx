import React, { useState, useEffect, useCallback } from 'react';
import Lobby from './Lobby';
import Room from './Room';

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [accessToken, setAccessToken] = useState({});
  const [apiToken, setApiToken] = useState('');

  // const urlParam = (property) => new URLSearchParams(window.location.search).get(property) || '';
  
  useEffect(() => {
    setApiToken('HVU7fUYwfvwDaNbGBTFaLpwh');
    // setApiToken(urlParam('api_token'));
  }, []);
    
  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    // const data = await fetch('localhost:3000/api/v1/tokens/create', {
    fetch('http://localhost:3000/api/v1/access_tokens', {
      method: 'POST',
      body: JSON.stringify({
        identity: username,
        room: roomName
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + apiToken,
      }
    })
    .then(r => r.json())
    .then(setAccessToken)
    .catch(err => console.log(JSON.stringify(err))); 
  }, [username, roomName]);

  const handleLogout = useCallback(event => {
    setAccessToken(null);
  }, []);
  
  return (
    accessToken?.secret_key ?
      <Room 
        roomName={roomName}
        accessToken={accessToken}
        handleLogout={handleLogout}
      />
    :
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
  )
};

export default VideoChat;