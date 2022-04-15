import { User } from '@prisma/client';
import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from './constants';

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = BASE_URL) {
    this.axiosInstance = axios.create({ baseURL });
  }

  private async put(path: string, body: unknown): Promise<unknown> {
    return this.axiosInstance.put(path, body).then((response) => response.data);
  }

  public async updatePrivilegeLevel(
    targetEmail: string,
    targetPrivilegeLevel: string,
  ): Promise<void> {
    await this.put(`/api/user/${targetEmail}/privilegeLevel`, {
      privilegeLevel: targetPrivilegeLevel,
    });
  }
}
export default new ApiClient();
