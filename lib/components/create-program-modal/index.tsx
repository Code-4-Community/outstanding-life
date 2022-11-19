import ProgramForm from '../program-form';
import PopUp from '../pop-up';
import { ApiClient } from '../../apiClient';
import { useState } from 'react';

type CreateProgramModalProps = {
  modalManagement: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

const CreateProgramModal: React.FC<CreateProgramModalProps> = ({ modalManagement }) => {
  const [eventName, setEventName] = useState<string>('');
  const [eventStart, setEventStart] = useState<Date>(new Date());
  const [eventEnd, setEventEnd] = useState<Date>(new Date());
  const [eventDescription, setEventDescription] = useState<string>('');
  const [registrationLink, setRegistrationLink] = useState<string>('');
  const [recurring, setRecurring] = useState<boolean>(false);
  return (
    <PopUp
      header="Create Event"
      manageModal={modalManagement}
      confirmText="Create"
      size="2xl"
      onConfirm={() => {
        console.log(eventName)
        // TODO
        // ApiClient.createProgram({})
        // console.log('Creating program...');
      }}>
      <ProgramForm eventName={eventName} setEventName={setEventName} eventStart={eventStart} setEventStart={setEventStart} 
        eventEnd={eventEnd} setEventEnd={setEventEnd} eventDescription={eventDescription} setEventDescription={setEventDescription}
        registrationLink={registrationLink} setRegistrationLink={setRegistrationLink} setRecurring={setRecurring} recurring={recurring} />
    </PopUp>
  );
};

export default CreateProgramModal;
