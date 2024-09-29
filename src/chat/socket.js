import { io } from 'socket.io-client';
import { getToken } from '../users/services/localStorageService';

const socket = io('http://localhost:8181', {
    
    query: { token: getToken() },
});

export default socket;
