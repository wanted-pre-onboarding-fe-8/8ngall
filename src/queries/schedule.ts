import httpClient from '../http';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ISchedule, ServerSideScheduleWrapper } from '../types';

export function useGetSchedules() {
  const query = '';
  return useQuery(['schedules'], () =>
    httpClient.get<ServerSideScheduleWrapper>(`schedules${query}`),
  );
}

export function useAddSchedule() {
  return useMutation((data: ISchedule) => httpClient.post('schedules', data));
}

export function useDeleteScheduleById() {
  return useMutation((id: number) => httpClient.delete(`schedules/${id}`));
}
