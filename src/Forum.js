import { Forum } from '@mui/icons-material';
import React, { useState } from 'react';
import "./Forum.css";


function Forum () {
    const [posts, setPosts] = useState([
        { username: 'Alice', comment: 'Olá boa tarde, estou procurando pontos de coleta, pode me ajudar ?' },
        { username: 'João', comment: 'Use o localizador do site para encontrar alguns perto de você!' },
        { username: 'Carol', comment: 'Fiz uma entrega de alimentos hoje, acumulei 30 pontos!' }
    ]);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const handlePost = () => {
        setPosts([...posts, { username, comment }]);
        setUsername('');
        setComment('');
    };

    return (
        <div>
            <h1>Fórum</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.username}</h2>
                    <p>{post.comment}</p>
                </div>
            ))}
            <h2>Quer participar? Deixe um comentário</h2>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Nome de usuário:" />
            <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Comentário:" />
            <button onClick={handlePost}>Enviar</button>
        </div>
    );
}

export default Forum;