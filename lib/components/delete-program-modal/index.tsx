import PopUp from '../pop-up';
import { Text } from '@chakra-ui/react';

type DeleteProgramModalProps = {
  modalManagement: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

const DeleteProgramModal: React.FC<DeleteProgramModalProps> = ({ modalManagement }) => {
  return (
    <PopUp
      header=""
      manageModal={modalManagement}
      confirmText="Delete"
      size="2xl"
      onConfirm={() => {
        console.log('Deleting event...');
      }}>
      <Text mt="30px" align="center" color="blackAlpha.700" fontWeight="semibold">
        Are you sure you want to delete this event?
      </Text>
    </PopUp>
  );
};

export default DeleteProgramModal;
