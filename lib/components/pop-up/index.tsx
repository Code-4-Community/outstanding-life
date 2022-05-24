import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface PopUpProps {
  header?: string;
  manageModal: { isOpen: boolean; onOpen: () => void; onClose: () => void };
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  style?: React.CSSProperties;
}

const PopUp: React.FC<PopUpProps> = ({
  header,
  cancelText,
  confirmText,
  onConfirm,
  style,
  manageModal,
  children,
}) => {
  return (
    <>
      <Modal styleConfig={style} isOpen={manageModal.isOpen} onClose={manageModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          {header && <ModalHeader>{header}</ModalHeader>}
          {children && <ModalBody>{children}</ModalBody>}
          <ModalFooter>
            <Button mr={3} onClick={manageModal.onClose}>
              {cancelText ?? 'Cancel'}
            </Button>
            <Button variant="osl" onClick={onConfirm}>
              {confirmText ?? 'OK'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopUp;
