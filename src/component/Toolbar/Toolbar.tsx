import reactLogo from '../../images/ic-react.png';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle ps-5 pe-5 pt-2 pb-2 d-flex justify-content-between">
      <div className="d-flex align-items-center justify-content-between">
        <div className="p-2">
          <img className="w-50 h-50" src={reactLogo} alt="React Logo"/>
        </div>
        <div className="d-flex align-items-center flex-column">
          <span>Home work 70</span>
          <strong>Application contacts book</strong>
        </div>
      </div>
    </nav>
);
};

export default Toolbar;