import ProgramForm from '../program-form';
import PopUp from '../pop-up';

type EditProgramModalProps = {
  modalManagement: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

const EditProgramModal: React.FC<EditProgramModalProps> = ({ modalManagement }) => {
  return (
    <PopUp
      header="Edit Event"
      manageModal={modalManagement}
      confirmText="Edit"
      size="2xl"
      onConfirm={() => {
        console.log('Editing program...');
      }}>
      <ProgramForm />
    </PopUp>
  );
};

export default EditProgramModal;
