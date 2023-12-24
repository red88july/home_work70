import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {Contacts} from '../../types';
import * as React from 'react';
import DefaultPicture from '../../images/def-pic.png';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store.ts';
import {postContact} from '../../containers/contactsThinks/contactsThinks.ts';
import ButtonSpinner from '../Spinner/ButtonSpinner.tsx';


const ContactForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const postForm = useSelector((state: RootState) => state.postLoading);
  const [contacts, setContacts] = useState<Contacts>({
    id: '',
    name: '',
    phone: '',
    email: '',
    photo: '',
  });

  const inputSet = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    const genId = Math.random().toString();
    setContacts((prevState) => ({
      ...prevState,
      id: genId,
      [name]: value,
    }));
  };

  const photoPreview = () => (
    <img
      src={contacts.photo === '' ? DefaultPicture : contacts.photo}
      alt={contacts.photo === '' ? 'default profile picture' : 'Profile photo'}
      style={{width: '100px', height: '100px'}}
    />
  );

  const onFormSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(postContact(contacts));
    } catch (e) {
      console.log(`Fethching data with error : ${e}`);
    } finally {
      setContacts((prevState) => ({
        ...prevState,
        id: '',
        name: '',
        phone: '',
        email: '',
        photo: '',
      }));
      navigate('/');
    }
  };

  const handleClickBack = () => {
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={onFormSubmit} className="w-50 mt-5">
        <div className="mb-3 d-flex align-items-center gap-4">
          <span className="fw-bold">Name</span>
          <input
            type="text"
            name="name"
            value={contacts.name}
            onChange={inputSet}
            className="form-control w-50"
            required/>
        </div>
        <div className="mb-3 d-flex align-items-center gap-4 ">
          <span className="fw-bold">Phone</span>
          <input
            type="text"
            name="phone"
            value={contacts.phone}
            onChange={inputSet}
            className="form-control w-50"
            required/>
        </div>
        <div className="mb-3 d-flex align-items-center gap-4">
          <span className="fw-bold">E-mail</span>
          <input
            type="email"
            name="email"
            value={contacts.email}
            onChange={inputSet}
            className="form-control w-50"/>
        </div>
        <div className="mb-3 d-flex align-items-center gap-4">
          <span className="fw-bold">Photo</span>
          <input
            type="text"
            name="photo"
            value={contacts.photo}
            onChange={inputSet}
            className="form-control w-50"/>
        </div>
        <div className="mb-3 d-flex align-items-center gap-4">
          <span className="fw-bold">Photo preview</span>
          <div className="pic-preview border border-3 p-2">
            {photoPreview ()}
          </div>
        </div>
        <div className="d-flex gap-3">
          <button
            type="submit"
            className="btn btn-success"
            disabled={postForm}>
            {postForm ? <ButtonSpinner/> : 'Save'}
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={handleClickBack}>
            Back to contacts
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;