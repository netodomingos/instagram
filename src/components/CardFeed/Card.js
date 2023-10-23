import React, { useState } from 'react';
import './Card.css';

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { BiBookmark } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";

const Card = ({ user, imageUrl, likes, comments, publishAt }) => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');

  const commentsRecived = []

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    commentsRecived.push(comment)
    setComment('');
  }

  return (
    <div className="card-container">
      <div className="card-header">
        <div className="first-div">
            <img src={user.profileImage} alt={`${user.username}'s Profile`} />
            <span className="username">{user.username} • {publishAt}</span>
        </div>
        <div>
            <HiOutlineDotsHorizontal size={20}/>
        </div>
      </div>
      <img className="card-image" src={imageUrl} alt="Imagem do Card" />
      <div className="card-actions">
        <div className='card-icons'>
            <button onClick={() => toggleLike()}>
              {
                liked === true ? (
                  <FaHeart size={25} color='#ff0000'/> 
                ) : (
                  <FaRegHeart size={25} color='#000'  />
                ) 
              }
            </button>
            <button>
                <FaRegComment  size={25} color='#000'/>
            </button>
            <button >
                <TbSend  size={25} color='#000'/>
            </button>
        </div>
        <div>
        <button >
                <BiBookmark  size={25} color='#000'/>
            </button>
        </div>
      </div>
      <div className="comments">
        <p>{likes + (liked === true ? 1 : 0)} curtidas</p>
        {
          comments.map(items => (
            <div key={items.id} className='comment'>
              <p>{items.user}</p>
              <span>{items.comment}</span>
            </div>
          ))
        }
      </div>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          placeholder="Adicione um comentário..."
          value={comment}
          onChange={handleCommentChange}
        />
      </form>
    </div>
  );
};

export default Card;
