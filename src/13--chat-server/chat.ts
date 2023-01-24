function createConnection(serverUrl: string, roomId: string) {
  return {
    connect() {
      console.log(`Connecting to ${roomId} room at server ${serverUrl}...`);
    },
    disconnect() {
      console.log(`Disconnected from ${roomId} room at server ${serverUrl}.`);
    },
  };
}

export default createConnection;
