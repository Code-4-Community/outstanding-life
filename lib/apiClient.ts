import { User } from '@prisma/client';
import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from './constants';

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = BASE_URL) {
    this.axiosInstance = axios.create({ baseURL });
  }

  private async post(path: string, body: unknown): Promise<unknown> {
    return this.axiosInstance.post(path, body).then((response) => response.data);
  }


  private async put(path: string, body: unknown): Promise<unknown> {
    return this.axiosInstance.put(path, body).then((response) => response.data);
  }

  public async createProgram(
    title: string,
    content: string,
    link: string,
    eventStart: Date,
    eventEnd: Date
  ): Promise<void> {
    await this.post(`/api/programs`, {
      title: title,
      content: content,
      link: link,
      eventStart: eventStart,
      eventEnd: eventEnd
    });
  }

  public async updatePrivilegeLevel(
    targetEmail: string,
    targetPrivilegeLevel: string,
  ): Promise<void> {
    await this.put(`/api/user/privilege-level`, {
      email: targetEmail,
      privilegeLevel: targetPrivilegeLevel,
    });
  }
}
export default new ApiClient();
