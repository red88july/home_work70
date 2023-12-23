const ContactsItem = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="border border-2 rounded-2 p-2">
        <div className="d-flex gap-3 align-items-center">
          <div className="p-1">
            <img src="https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
                 alt="photo" style={{width: "100px", height: "100px"}} />
          </div>
          <div>
            <strong className="fs-5">Elon Musk</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsItem;