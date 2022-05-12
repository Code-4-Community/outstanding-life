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
import apiClient from '../../lib/apiClient';

const Settings: React.FC = () => {
  const { data: session } = useSession();

  const userPrivilegeLevel: PrivilegeLevel | undefined = getPrivilegeLevelFromSession(session);

  if (session) {
    return (
      <>
        <NavBar navLinks={navLinks} />
        <img src="https://c4c-outstanding-life.s3.us-east-2.amazonaws.com/2020-10-08T10%3A30%3A00_000Z_i+love+jamie2"/>
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
      await apiClient.updatePrivilegeLevel(targetEmail, targetPrivilegeLevel);
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
      <option key={value} value={value}>
        {value}
      </option>
    );
  });
}

const UpdatePrivilegeForm: React.FC = () => {
  const [targetEmail, setTargetEmail] = useState<string>('');
  const [targetPrivilegeLevel, setTargetPrivilegeLevel] = useState<string>('');
  const [showAlert, setAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  return (
    <Container maxWidth="lg">
      <Stack>
        {showAlert && (
          <Alert
            display="flex"
            justifyContent="space-between"
            colorScheme="lightPink"
            variant="top-accent">
            <AlertIcon />
            <AlertDescription>{alertMessage}</AlertDescription>
            <CloseButton
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
          colorScheme="darkPink"
          variant="solid"
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
