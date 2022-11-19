import ProgramForm from '../program-form';
import PopUp from '../pop-up';
import ApiClient from '../../apiClient';
import { Dispatch, SetStateAction, useState } from 'react';

type CreateProgramModalProps = {
  modalManagement: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

async function handleConfirm(
  title: string,
  content: string,
  link: string,
  eventStart: Date,
  eventEnd: Date,
  setEventName: Dispatch<SetStateAction<string>>,
  setEventStart: Dispatch<SetStateAction<Date>>,
  setEventEnd: Dispatch<SetStateAction<Date>>,
  setEventDescription: Dispatch<SetStateAction<string>>,
  setRegistrationLink: Dispatch<SetStateAction<string>>,
  setRecurring: Dispatch<SetStateAction<boolean>>,
){
  await createProgram(
    title,
    content,
    link,
    eventStart,
    eventEnd
  );
  resetProgramForm(
    setEventName,
    setEventStart,
    setEventEnd,
    setEventDescription,
    setRegistrationLink,
    setRecurring
  );
}

async function createProgram(
  title: string,
  content: string,
  link: string,
  eventStart: Date,
  eventEnd: Date
){
  await ApiClient.createProgram(
    title,
    content,
    link,
    eventStart,
    eventEnd
  );
  console.log('Creating program...');
}

function resetProgramForm(
  setEventName: Dispatch<SetStateAction<string>>,
  setEventStart: Dispatch<SetStateAction<Date>>,
  setEventEnd: Dispatch<SetStateAction<Date>>,
  setEventDescription: Dispatch<SetStateAction<string>>,
  setRegistrationLink: Dispatch<SetStateAction<string>>,
  setRecurring: Dispatch<SetStateAction<boolean>>,
){
  setEventName("");
  setEventStart(new Date());
  setEventEnd(new Date());
  setEventDescription("");
  setRegistrationLink("");
  setRecurring(false);
}

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
      onConfirm={async () => {await handleConfirm(
          eventName,
          eventDescription,
          registrationLink,
          eventStart,
          eventEnd,
          setEventName,
          setEventStart,
          setEventEnd,
          setEventDescription,
          setRegistrationLink,
          setRecurring
        );
      }}>
      <ProgramForm eventName={eventName} setEventName={setEventName} eventStart={eventStart} setEventStart={setEventStart} 
        eventEnd={eventEnd} setEventEnd={setEventEnd} eventDescription={eventDescription} setEventDescription={setEventDescription}
        registrationLink={registrationLink} setRegistrationLink={setRegistrationLink} setRecurring={setRecurring} recurring={recurring} />
    </PopUp>
  );
};

export default CreateProgramModal;
