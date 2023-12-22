import {useNavigate} from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/');
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50 mt-5">
        <div className="mb-3 d-flex align-items-center gap-4">
          <span className="fw-bold">Name</span>
          <input type="text" className="form-control w-50" />
        </div>
        <div className="mb-3 d-flex align-items-center gap-4 ">
          <span className="fw-bold">Phone</span>
          <input type="text" className="form-control w-50" />
        </div>
        <div className="mb-3 d-flex align-items-center gap-4">
          <span className="fw-bold">E-mail</span>
          <input type="email" className="form-control w-50" />
        </div>
        <div className="mb-3 d-flex align-items-center gap-4">
          <span className="fw-bold">Photo</span>
          <input type="text" className="form-control w-50" />
        </div>
        <div className="mb-3 d-flex align-items-center gap-4">
          <span className="fw-bold">Photo preview</span>
         <div className="pic-preview border border-3"></div>
        </div>
        <div className="d-flex gap-3">
          <button type="submit" className="btn btn-success">Save</button>
          <button type="submit" className="btn btn-secondary" onClick={handleClickBack}>Back to contacts</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;