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
  body?: string;
  manageModal: { isOpen: boolean; onOpen: () => void; onClose: () => void };
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  style?: React.CSSProperties;
}

const PopUp: React.FC<PopUpProps> = ({
  header,
  body,
  cancelText,
  confirmText,
  onConfirm,
  style,
  manageModal,
}) => {
  return (
    <>
      <Modal styleConfig={style} isOpen={manageModal.isOpen} onClose={manageModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          {header && <ModalHeader>{header}</ModalHeader>}
          {body && <ModalBody>{body}</ModalBody>}
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
