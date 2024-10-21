import React, { useState } from 'react'
import { Modal } from 'antd';

const ModalComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    
    return (
        <Modal>
            
        </Modal>
    )
}

export default ModalComponent