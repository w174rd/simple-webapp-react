import { useState } from "react";
import CustomButton from "../button";
import ModalConfirm from "../ModalConfirm";



const ButtonWithConfirm = ({handleConfirm, btnTitle, titleModal = "title", messageModal="message", btnConfirmModal}) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    
    return(
        <>
            <CustomButton className="btn btn-danger ms-2" text={btnTitle} onClick={
                openModal
            }/>

            <ModalConfirm
                    show={isModalVisible}
                    onClose={closeModal}
                    onConfirm={handleConfirm}
                    title={titleModal}      
                    message={messageModal}
                    btnConfirm={btnConfirmModal}
            />
        </>
    );
}

export default ButtonWithConfirm;