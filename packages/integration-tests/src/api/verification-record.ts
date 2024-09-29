import { type KyInstance } from 'ky';

export const createVerificationRecordByPassword = async (api: KyInstance, password: string) => {
  const { verificationRecordId } = await api
    .post('api/verifications/password', {
      json: {
        password,
      },
    })
    .json<{ verificationRecordId: string }>();

  return verificationRecordId;
};
