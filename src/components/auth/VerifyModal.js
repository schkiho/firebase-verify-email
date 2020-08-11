import React from "react";

const VerifyModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main py-2 rounded">
        {children}
        <button className="modal-button rounded" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default VerifyModal;
