// client/src/socket.ts
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Nếu dùng Render sau này thì đổi thành domain backend

export default socket;
