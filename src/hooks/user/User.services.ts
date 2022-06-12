import { API } from 'config';
import api from 'services/axios';
import { validCode } from 'utils/validCode';
import { UserData } from './User.types';

async function fetchUserService(): Promise<UserData> {
  const response = await api.get<UserData>({
    url: API.USER_URL,
  });
  if (validCode(response.statusCode)) {
    return response.body;
  }

  throw new Error();
}

export { fetchUserService };
