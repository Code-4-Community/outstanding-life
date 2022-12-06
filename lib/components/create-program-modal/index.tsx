import ProgramForm from '../program-form';
import PopUp from '../pop-up';

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
        console.log('Creating program...');
      }}>
      <ProgramForm />
    </PopUp>
  );
};

export default CreateProgramModal;
