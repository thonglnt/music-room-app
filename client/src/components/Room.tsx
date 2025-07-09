import React, { useEffect } from 'react';
import socket from '../socket'

const Room: React.FC = () => {
  useEffect(() => {
    socket.emit('join-room', { roomId: 'room-123' });

    socket.on('user-joined', (id: string) => {
      console.log(`User ${id} just joined the room`);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>🎧 You're in room-123</div>;
};

export default Room;
