import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './Navigation.css';

import AuthModal from './AuthModal';


const Navigation = () => {
  return(
    <div>
      <ul>
        <li>
          <Link>Latest</Link>
        </li>
        <li>
          <Link>Categories</Link>
        </li>
        <li>
          <Link>New topic</Link>
        </li>
        <li>
          <Link>Settings</Link>
        </li>
        <li>
          <Link><AuthModal /></Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;