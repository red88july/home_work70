import React, {useEffect} from 'react';
import {getFullContacts} from '../../containers/contactsThinks/contactsThinks.ts';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store.ts';
import {deacrese, increase} from '../../containers/contactsSlice/contactsSlice.ts';
import Backdrop from "../Backdrop/Backdrop";

const Modal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactsFull = useSelector((state: RootState) => state.itemFull);
  const actionModal = useSelector((state: RootState) => state.actionModal);
  const selected = useSelector((state:RootState) => state.selected);

  useEffect(() => {
    dispatch(getFullContacts());
  }, [dispatch]);

  const onInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleOnClickBack = () => {
    dispatch(increase());
  };

  const closeModal = () => {
    dispatch(deacrese());
  };

  return (
    <>
      {actionModal && <Backdrop show={actionModal} onClick={handleOnClickBack}/>}
      <div style={{display: actionModal ? 'block' : 'none'}} className="modal actionModal" onClick={closeModal}>
        <div className="modal-dialog" onClick={onInnerClick}>
          <div className="modal-content">
            <div className="d-flex justify-content-end p-2">
              <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}/>
            </div>
            <div className="modal-body">
              {contactsFull.filter((contact) => contact.id === selected)
                .map((select) => (
                  <div key={select.id} className="d-flex gap-4">
                    <div className="p-1">
                      <img
                        src={select.photo}
                        alt={select.name}
                        style={{width: '100px', height: '100px'}}
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <h3>{select.name}</h3>
                      <a href="#" className="ic-phone">{select.phone}</a>
                      <a href="#" className="ic-message">{select.email}</a>
                    </div>
                  </div>
                ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Edit</button>
              <button type="button" className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;