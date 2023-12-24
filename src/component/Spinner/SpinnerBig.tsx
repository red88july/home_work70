const SpinnerBig = () => {
  return (
    <div className="spinner-border" style={{width: "4rem", height: "4rem"}} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default SpinnerBig;