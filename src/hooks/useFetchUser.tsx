import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../api/userApi';

export const useFetchUser = (userId: string) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};