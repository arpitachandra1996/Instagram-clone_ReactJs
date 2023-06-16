import React from 'react';
import './Sugestions.css';
import { Avatar } from '@mui/material';

function Sugestions  ()  {
  return (
    <div className='suggestions'>
      <div className='suggestions_title'>Suggestions for you</div>
      <div className='suggestions_usernames'>

        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>N</Avatar>
            </span>
            <div className='user_info'>
              <span className='username'>Nick</span>
              <span className='relation'>Follows you</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>

         <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>M</Avatar>
            </span>
            <div className='user_info'>
              <span className='username'>Mrinaal_</span>
              <span className='relation'>New to instagram</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>

        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>J</Avatar>
            </span>
            <div className='user_info'>
              <span className='username'>Joye</span>
              <span className='relation'>Follows you</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>

      </div>
    </div>
  )
};

export default Sugestions;
