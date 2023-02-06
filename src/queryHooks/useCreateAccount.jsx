import { useMutation } from '@tanstack/react-query';
import { createNewAccount } from '../api/applications';
export function useCreateAccount(applicant) {
  return useMutation({
    mutationFn: () => createNewAccount(applicant),
    onSuccess: () => {
      console.log('Success');
    },
  });
}
