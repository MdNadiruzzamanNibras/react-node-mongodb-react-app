import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/user/add'>Add user</Link>
        </div>
    );
};

export default Header;