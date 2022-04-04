import { Button, Container, Input, Select, Stack } from '@chakra-ui/react';
import { PrivilegeLevel } from '@prisma/client';
import axios from 'axios';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Dispatch, SetStateAction, useState } from 'react';
import { BASE_URL } from '../../lib/constants';
import {
  getPrivilegeLevelFromSession,
  privilegeLevelCompareTo,
} from '../../lib/utils/privilegeLevelUtils';
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';

const Settings: React.FC = () => {
  const { data: session } = useSession();

  const userPrivilegeLevel: PrivilegeLevel | undefined = getPrivilegeLevelFromSession(session);

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        {userPrivilegeLevel &&
          privilegeLevelCompareTo(userPrivilegeLevel, PrivilegeLevel.ADMIN) >= 0 && (
            <UpdatePrivilegeForm />
          )}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }
};

async function handleSubmit(
  targetEmail: string,
  targetPrivilegeLevel: string,
  setAlert: Dispatch<SetStateAction<boolean>>,
  setAlertMessage: Dispatch<SetStateAction<string>>,
) {
    try {
    if (targetEmail && targetPrivilegeLevel) {
        await axios.put(`${BASE_URL}/api/user/${targetEmail}/privilegeLevel`, {
        privilegeLevel: targetPrivilegeLevel,
        });
        setAlert(true);
        setAlertMessage(`Successfully changed user privilege level to ${targetPrivilegeLevel}`)
    } else {
        setAlert(true);
        setAlertMessage("Please enter an email and privilege level.");
    }  
  } catch (err: any) {
    setAlert(true);
    setAlertMessage(err.response.data);
  }
}

const UpdatePrivilegeForm: React.FC = () => {
  const [targetEmail, setTargetEmail] = useState<string>('');
  const [targetPrivilegeLevel, setTargetPrivilegeLevel] = useState<string>('');
  const [showAlert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <Container maxWidth="lg">
      <Stack>
        {showAlert && (
          <Alert>
            <AlertIcon />
            <AlertDescription>{alertMessage}</AlertDescription>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => {
                setAlert(false);
                setAlertMessage('');
              }}
            />
          </Alert>
        )}
        {`Update a User's Privilege Level`}
        <Input
          variant="outline"
          placeholder="Enter Email of User to Update"
          size="lg"
          width="auto"
          onChange={(event) => setTargetEmail(event.target.value)}
        />
        <Select
          placeholder="Select Privilege Level"
          size="lg"
          onChange={(event) => setTargetPrivilegeLevel(event.target.value)}>
          <option value="BASIC">BASIC</option>
          <option value="ADMIN">ADMIN</option>
        </Select>
        <Button
          onClick={() =>
            handleSubmit(targetEmail, targetPrivilegeLevel, setAlert, setAlertMessage)
          }>
          Update Privilege Level
        </Button>
      </Stack>
    </Container>
  );
};

export default Settings;
