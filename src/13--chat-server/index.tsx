import React, { useState, ChangeEvent } from 'react';

import ChatRoom from './ChatRoom';

function MyServer() {
  const [openChat, setOpenChat] = useState<boolean>(true);
  const [roomId, setRoomId] = useState<string>('general');

  const handleToggleChat = () => {
    setOpenChat((state) => !state);
  };

  const handleChangeRoomId = (e: ChangeEvent<HTMLSelectElement>) => {
    setRoomId(e.target.value);
  };

  console.log('Render: MyServer');

  return (
    <>
      <p>
        Choose the chat room:&nbsp;
        <select value={roomId} onChange={handleChangeRoomId}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
        &nbsp;
        <button onClick={handleToggleChat}>{openChat ? 'Close Chat' : 'Open Chat'}</button>
      </p>
      {openChat && <ChatRoom roomId={roomId} />}
    </>
  );
}

export default MyServer;
