import {useState} from "react";
import './modal.css'

const Modal = () => {
    const [showModal , setShowModal]  = useState(false);
    

    return (
        <div>
            { 
            <button
              className="Assignment1"
              onClick={() => setShowModal(true)}
              style={ { position: 'absolute',
                top:"4%",
                left: '94%',
                transform: 'translate(-50%, -50%)'}}
            >
              Modal
            </button>
      }

      {showModal && (
            <div className = "modal-container">

                <div className="modal-heading">
                    Modal Content
                    <button onClick ={()=>{setShowModal(false)}}>
                    <span >
                        ❌
                    </span>
                    </button>
                </div>
                <p className="modal-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptatum iure est nostrum! Alias doloribus praesentium iusto reiciendis consequuntur veniam sed maiores ipsum perferendis possimus, accusamus amet totam illum quaerat.
                </p>

            </div>
      )}

        </div>
    
    )
}



export default Modal