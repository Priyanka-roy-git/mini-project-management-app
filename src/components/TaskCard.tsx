
import { useState } from 'react';
import type { DraggableProvided } from '@hello-pangea/dnd';
import type { Task } from '../stores/projectStore';
import TaskModal from './TaskModal';
import * as S from './styles/TaskCard.styled'; 
interface TaskCardProps {
  task: Task;
  provided: DraggableProvided;
  projectId: string;
}

export default function TaskCard({ task, provided, projectId }: TaskCardProps) {
  const [editing, setEditing] = useState(false);

  return (
    <>
      <S.Card
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        onClick={() => setEditing(true)}
      >
        <S.Title>{task.title}</S.Title>
        {task.dueDate && <S.DueDate>{task.dueDate}</S.DueDate>}
      </S.Card>

      {editing && (
        <TaskModal
          projectId={projectId}
          existing={task}
          onClose={() => setEditing(false)}
        />
      )}
    </>
  );
}
