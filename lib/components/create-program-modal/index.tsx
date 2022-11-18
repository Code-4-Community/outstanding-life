import ProgramForm from '../program-form';
import PopUp from '../pop-up';
import { ApiClient } from '../../apiClient';

type CreateProgramModalProps = {
  modalManagement: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

const CreateProgramModal: React.FC<CreateProgramModalProps> = ({ modalManagement }) => {
  return (
    <PopUp
      header="Create Event"
      manageModal={modalManagement}
      confirmText="Create"
      size="2xl"
      onConfirm={() => {
        // TODO
        ApiClient.createProgram({})
        console.log('Creating program...');
      }}>
      <ProgramForm />
    </PopUp>
  );
};

export default CreateProgramModal;
