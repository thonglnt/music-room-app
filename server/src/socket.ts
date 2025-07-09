import { Server, Socket } from 'socket.io';

export default function registerSocketHandlers(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('join-room', ({ roomId }) => {
      socket.join(roomId);
      socket.to(roomId).emit('user-joined', socket.id);
    });

    socket.on('play', ({ roomId, time }) => {
      socket.to(roomId).emit('play', { time });
    });

    socket.on('pause', ({ roomId }) => {
      socket.to(roomId).emit('pause');
    });

    socket.on('comment', ({ roomId, message }) => {
      io.to(roomId).emit('comment', { userId: socket.id, message });
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
}
