import React, { useState } from 'react';
import './Stories.css';
import { gerarNumeroRandomico } from '../../utils/randomNumber';

const Stories = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      username: 'usuario1',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: false,
    },
    {
      id: 2,
      username: 'usuario2',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: true,
    },
    {
      id: 3,
      username: 'usuario2',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: true,
    },
    {
      id: 3,
      username: 'usuario2',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: true,
    },
    {
      id: 4,
      username: 'usuario2',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: true,
    },
    {
      id: 5,
      username: 'usuario2',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: true,
    },
    {
      id: 6,
      username: 'usuario2',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: true,
    },
    {
      id: 7,
      username: 'usuario2',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: true,
    },
    {
      id: 8,
      username: 'usuario2',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: true,
    },
    {
      id: 9,
      username: 'usuario2',
      profileImage: `https://picsum.photos/${gerarNumeroRandomico()}`,
      viewed: true,
    },

    // Adicione mais histórias conforme necessário
  ]);

  return (
    <div className="stories-container">
      {stories.map((story) => (
        <div
          key={story.id}
          className={`story `}
        >
          <div className={` ${story.viewed ? 'profile-picture-viewed' : 'profile-picture'}`}>
            <img
              src={story.profileImage}
              alt={`Imagem de perfil de ${story.username}`}
            />
          </div>
          <span className="username">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
