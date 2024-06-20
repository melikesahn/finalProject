import React, { useState, useContext } from 'react';
import { Button, Modal } from 'flowbite-react';
import { AuthContext } from '../contects/AuthProvider';


const Logout = () => {
    const [showModal, setShowModal] = useState(false);
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        setShowModal(false);
    };

    return (
        <div>
            <Button onClick={() => setShowModal(true)}>
                Çıkış Yap
            </Button>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Modal.Header>
                    Çıkış Bilgilendirme
                </Modal.Header>
                <Modal.Body>
                    <p>Çıkış Yapmak İstediğine Emin misin?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={() => setShowModal(false)}>
                        İptal
                    </Button>
                    <Button color="red" onClick={handleLogout}>
                        Çıkış Yap
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Logout;
