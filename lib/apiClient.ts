import axios from 'axios';
import { BASE_URL } from './constants';

export async function updatePrivilegeLevel(targetEmail: string, targetPrivilegeLevel: string) {
  await axios.put(`${BASE_URL}/api/user/${targetEmail}/privilegeLevel`, {
    privilegeLevel: targetPrivilegeLevel,
  });
}
