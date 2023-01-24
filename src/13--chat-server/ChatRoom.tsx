import React, { useState, useEffect, ChangeEvent } from 'react';

import createConnection from './chat';

type ChatRoomProps = {
  roomId: string;
};

function ChatRoom({ roomId }: ChatRoomProps) {
  const [serverUrl, setServerUrl] = useState<string>('http://localhost:9999');

  const handleChangeServer = (e: ChangeEvent<HTMLInputElement>) => {
    setServerUrl(e.target.value);
  };

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return (
    <>
      <label>
        Server URL: <input value={serverUrl} onChange={handleChangeServer} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default ChatRoom;
