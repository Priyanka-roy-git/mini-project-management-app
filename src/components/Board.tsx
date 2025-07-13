
import { useParams, Link } from 'react-router-dom';
import { DragDropContext, Droppable, type DropResult } from '@hello-pangea/dnd';
import { useProjectStore, type Status } from '../stores/projectStore';
import Column from './Column';
import TaskModal from './TaskModal';
import * as S from './styles/Board.styled'; 

const statuses: Status[] = ['todo', 'in progress', 'done'];

export default function Board() {
  const { id } = useParams<{ id: string }>();
  const project = useProjectStore(s => s.projects.find(p => p.id === id));
  const moveTask = useProjectStore(s => s.moveTask);

  if (!project) {
    return <S.NotFound>Project not found</S.NotFound>;
  }

  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;

    const toStatus = destination.droppableId as Status;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    moveTask(project.id, draggableId, toStatus, destination.index);
  };

  return (
    <S.Container>
   
      <S.Header>
        <S.BackLink to="/Dashboard">← Back</S.BackLink>
        <S.ProjectName>{project.name}</S.ProjectName>
        <TaskModal projectId={project.id} />
      </S.Header>

      <DragDropContext onDragEnd={onDragEnd}>
        <S.BoardArea>
          {statuses.map(status => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <Column
                  ref={provided.innerRef}
                  droppableProps={provided.droppableProps}
                  title={status.toUpperCase()}
                  tasks={project.tasks?.filter(t => t.status === status) ?? []}
                  projectId={project.id}
                >
                  {provided.placeholder}
                </Column>
              )}
            </Droppable>
          ))}
        </S.BoardArea>
      </DragDropContext>
    </S.Container>
  );
}
