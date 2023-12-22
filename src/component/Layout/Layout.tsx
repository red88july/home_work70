import * as React from 'react';
import {PropsWithChildren} from 'react';
import Toolbar from '../Toolbar/Toolbar.tsx';
import {Link, useNavigate} from 'react-router-dom';

const Layout:React.FC<PropsWithChildren> = ({children}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-contact');
  };

  return (
    <div>
      <header>
        <Toolbar/>
      </header>
      <main>
        <div className="mt-5 d-flex justify-content-evenly align-items-center border-bottom border-3">
          <Link to="/" className="main-link mb-3">Contacts</Link>
          <button type="button" className="btn btn-success mb-3" onClick={handleClick}>Add new contact</button>
        </div>
        {children}
      </main>
    </div>
  );
};

export default Layout;