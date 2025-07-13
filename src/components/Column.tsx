import { forwardRef, type PropsWithChildren } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import type { Task } from '../stores/projectStore';
import TaskCard from './TaskCard';
import * as S from './styles/Column.styled';

interface Props {
  title: string;
  tasks: Task[];
  projectId: string;
  droppableProps: React.HTMLAttributes<HTMLDivElement>;
}

const Column = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ title, tasks, projectId, children, droppableProps }, ref) => (
    <S.Container ref={ref} {...droppableProps}>
      <S.Title>{title}</S.Title>

      <S.TaskList>
        {tasks.map((task, index) => (
          <Draggable draggableId={task.id} index={index} key={task.id}>
            {(prov) => (
              <TaskCard
                task={task}
                provided={prov}
                projectId={projectId}
              />
            )}
          </Draggable>
        ))}

        {children} 
      </S.TaskList>
    </S.Container>
  )
);

Column.displayName = 'Column';
export default Column;
