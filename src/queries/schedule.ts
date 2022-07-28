import httpClient from '../http';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ServerSideSchedule, ServerSideSchedules } from '../types';

export function useGetSchedules() {
  return useQuery(['schedules'], () => httpClient.get<ServerSideSchedules>('schedules'));
}

export function useAddSchedule() {
  return useMutation((data: ServerSideSchedule) => httpClient.post('schedules', data));
}

export function useDeleteScheduleById() {
  return useMutation((id: number) => httpClient.delete(`schedules/${id}`));
}
