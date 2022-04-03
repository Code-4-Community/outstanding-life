import { Box, Button, Container, Input, Select, Stack } from '@chakra-ui/react';
import { PrivilegeLevel } from '@prisma/client';
import axios from 'axios';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { BASE_URL } from '../../lib/constants';
import {
    getPrivilegeLevelFromSession,
    privilegeLevelCompareTo,
} from '../../lib/utils/privilegeLevelUtils';

const Settings: React.FC = () => {
    const { data: session } = useSession();

    const userPrivilegeLevel: PrivilegeLevel | undefined = getPrivilegeLevelFromSession(session);

    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br />

                {userPrivilegeLevel &&
                    privilegeLevelCompareTo(userPrivilegeLevel, PrivilegeLevel.ADMIN) >= 0 &&
                    <UpdatePrivilegeForm />}

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

async function handleSubmit(targetEmail: string, targetPrivilegeLevel: string) {
    try {
        await axios.put(`${BASE_URL}/api/user/${targetEmail}/privilegeLevel`, {
        privilegeLevel: targetPrivilegeLevel,
    })
    } catch (err: any) {
        // TODO: Frontend to display error
        console.log(err.response.data)
    }
    
}

const UpdatePrivilegeForm: React.FC = () => {
    const [targetEmail, setTargetEmail] = useState<string>('');
    const [targetPrivilegeLevel, setTargetPrivilegeLevel] = useState<string>('');
    return (
        <Container maxWidth="lg">
        <Stack>
            Update a User's Privilege Level
            <Input
                variant="outline"
                placeholder="Enter Email of User to Update"
                size="lg"
                width="auto"
                onChange={(event) => setTargetEmail(event.target.value)}
            />
            <Select placeholder='Select Privilege Level' size='lg' onChange={(event) => setTargetPrivilegeLevel(event.target.value)}>
                <option value='ADMIN'>ADMIN</option>
                </Select>
            {/* TODO: dont allow to submit if target Email and target PrivilegeLevel are empty strings & display error message*/}
            <Button
                onClick={() => handleSubmit(targetEmail, targetPrivilegeLevel)
                }>
                Update Privilege Level
            </Button>
            </Stack>
            </Container>
    );
};


export default Settings;
