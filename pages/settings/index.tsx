import { Button, Container, Input, Select, Stack } from '@chakra-ui/react';
import { PrivilegeLevel } from '@prisma/client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  getPrivilegeLevelFromSession,
  privilegeLevelCompareTo,
} from '../../lib/utils/privilegeLevelUtils';
import { Alert, AlertIcon, AlertDescription, CloseButton } from '@chakra-ui/react';
import NavBar from '../../lib/components/navbar';
import navLinks from '../../lib/components/navbar/links';
import { updatePrivilegeLevel } from '../../lib/apiClient';

const Settings: React.FC = () => {
  const { data: session } = useSession();

  const userPrivilegeLevel: PrivilegeLevel | undefined = getPrivilegeLevelFromSession(session);

  if (session) {
    return (
      <>
        <NavBar navLinks={navLinks} />
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
      await updatePrivilegeLevel(targetEmail, targetPrivilegeLevel);
      setAlert(true);
      setAlertMessage(`Successfully changed user privilege level to ${targetPrivilegeLevel}`);
    } else {
      setAlert(true);
      setAlertMessage('Please enter an email and privilege level.');
    }
  } catch (err: any) {
    setAlert(true);
    setAlertMessage(err.response.data);
  }
}

function createPrivilegeLevelDropdown() {
  return Object.values(PrivilegeLevel).map((value) => {
    return (
      <div key={value}>
        <option value={value}>{value}</option>
      </div>
    );
  });
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
          {createPrivilegeLevelDropdown()}
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
