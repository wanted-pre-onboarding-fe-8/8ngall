import httpClient from '../http';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ISchedule, ServerSideScheduleWrapper } from '../types';

export function useGetSchedules() {
  const query = '';
  return useQuery(
    ['schedules'],
    () => httpClient.get<ServerSideScheduleWrapper>(`schedules${query}`),
    {
      staleTime: 1000 * 60,
    },
  );
}

export function useAddSchedule() {
  const queryClient = useQueryClient();

  return useMutation((data: ISchedule) => httpClient.post('schedules', data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['schedules']);
    },
  });
}

export function useDeleteScheduleById() {
  const queryClient = useQueryClient();

  return useMutation((id: number) => httpClient.delete(`schedules/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(['schedules']);
    },
  });
}
