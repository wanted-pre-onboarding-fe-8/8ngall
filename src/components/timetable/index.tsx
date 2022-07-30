import React from 'react';
import CCard from '../cCard';
import styled from 'styled-components';
import DeleteDialog from './DeleteDialog';
import { ServerSideScheduleWrapper, ServerSideSchedule } from '../../types';
import { useDeleteScheduleById } from '../../queries/schedule';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';

interface TimetableProps {
  schedules: ServerSideScheduleWrapper | [];
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<ServerSideScheduleWrapper, unknown>>;
}

function Timetable({ schedules, refetch }: TimetableProps) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedLectureId, setSelectedLectureId] = React.useState(-1);
  const { mutateAsync } = useDeleteScheduleById();

  const handleDeleteClick = (id: number) => {
    setSelectedLectureId(id);
    setOpenDialog(true);
  };

  const handleDeleteTime = async () => {
    await mutateAsync(selectedLectureId);
    refetch();
    setOpenDialog(false);
  };

  return (
    <Container>
      {Object.entries(schedules).map(([day, lectures]) => (
        <Day key={day}>
          <Title>{day}</Title>
          <Divider />
          <Schedule>
            {lectures.map((lecture: ServerSideSchedule) => (
              <CCard key={lecture.id} lecture={lecture} onClick={handleDeleteClick}></CCard>
            ))}
          </Schedule>
        </Day>
      ))}
      <DeleteDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDeleteTime}
      />
    </Container>
  );
}

export default Timetable;

const Container = styled.div`
  padding: 20px;
  margin-top: 20px;
  min-height: 200px;
  background-color: #fff;
  box-shadow: 1px 3px 1px 1px #b1b1b1;
  display: flex;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const Schedule = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Divider = styled.div`
  padding: 0px 10px;
  border-bottom: 1px solid #b1b1b1;
`;

const Day = styled.div`
  width: 17%;
  min-width: 100px;
`;
