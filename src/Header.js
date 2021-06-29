import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className='header'>

      <IconButton>
      <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        className="header_logo"
        src="https://th.bing.com/th/id/Reab202f2fa37cbfab6572c10067511ff?rik=eg5t0SQWrqIshg&pid=ImgRaw"
        alt=""
      />

      <IconButton>
      <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
