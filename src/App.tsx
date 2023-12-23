import {Route, Routes} from 'react-router-dom';
import '../src/style.css';
import ContactForm from './component/ContactForm/ContactForm';
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';
import Layout from './component/Layout/Layout.tsx';
import ContactsItem from './component/ContactsItem/ContactsItem.tsx';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<ContactsItem />}/>
          <Route path="/home" element={<ContactsItem />}/>
          <Route path={'/new-contact'} element={<ContactForm/>}/>
          <Route path="*" element={(
            <div className="container-fluid pic-container d-flex justify-content-center">
              <img
                className="pic-notfound"
                src={PageNoFoundPicture}
                alt="Page Not Found" />
            </div>
          )}/>
        </Routes>
      </Layout>
  );
}

export default App;
