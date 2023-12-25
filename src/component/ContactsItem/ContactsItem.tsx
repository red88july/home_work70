import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store.ts';
import {getContacts} from '../../containers/contactsThinks/contactsThinks.ts';
import {contactsId, increase} from '../../containers/contactsSlice/contactsSlice.ts';
import SpinnerBig from '../Spinner/SpinnerBig';
import Modal from "../Modal/Modal";

const ContactsItem = () => {
    const dispatch = useDispatch<AppDispatch>();
    const getContact = useSelector((state: RootState) => state.getLoading);
    const contacts = useSelector((state: RootState) => state.item);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const clickOnContact = (contactId: string) => {
        dispatch(contactsId(contactId));
        dispatch(increase());
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column w-50 gap-1 justify-content-center mt-5">
                    {getContact ? <SpinnerBig/> : contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="border border-2 rounded-2 p-2"
                            onClick={() => clickOnContact(contact.id)}>
                            <div className="d-flex gap-3 align-items-center">
                                <div className="p-1">
                                    <img
                                        src={contact.photo}
                                        alt={contact.name}
                                        style={{width: '100px', height: '100px'}}
                                    />
                                </div>
                                <div>
                                    <strong className="fs-5">{contact.name}</strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal />
        </>
    );
};

export default ContactsItem;