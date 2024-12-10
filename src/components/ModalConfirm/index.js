
const ModalConfirm = ({show, onClose, onConfirm, btnConfirm = "Confirm", title, message }) => {

    return (
        <div
          className={`modal fade ${show ? 'show d-block' : ''}`}
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: show ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}
        >
        <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>
              <div className="modal-body">
                <p>{message}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={()=>{
                    onConfirm();
                    onClose();
                }}>
                  {btnConfirm}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ModalConfirm