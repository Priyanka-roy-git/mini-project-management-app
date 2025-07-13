
import { useState } from 'react';
import { useProjectStore, type Task } from '../stores/projectStore';
import * as S from './styles/TaskModal.styled';
import Select from 'react-select';
import customSelectStyles from './styles/reactSelectStyles';

export default function TaskModal({
  projectId,
  existing,
  children,
  onClose,
}: {
  projectId: string;
  existing?: Task;
  children?: React.ReactNode;
  onClose?: () => void;
}) {
  const [open, setOpen] = useState(!children);
  const [form, setForm] = useState(
    existing ?? {
      title: '',
      description: '',
      status: '' as Task['status'],
      dueDate: '',
      assignee: '',
    }
  );

  const [errors, setErrors] = useState({
    title: '',
    description: '',
    dueDate: '',
    assignee: '',
    status: '',
  });

  const { addTask, updateTask, deleteTask } = useProjectStore();

  const validate = () => {
    const newErrors = {
      title: form.title ? '' : 'Title is required',
      description: form.description ? '' : 'Description is required',
      dueDate: form.dueDate ? '' : 'Due date is required',
      assignee: form.assignee ? '' : 'Assignee is required',
      status: form.status ? '' : 'Status is required',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((msg) => msg === '');
  };

  const closeModal = () => {
    setOpen(false);
    onClose?.();
  };

  const onSubmit = () => {
    if (!validate()) return;
    existing
      ? updateTask(projectId, { ...existing, ...form })
      : addTask(projectId, form);
    closeModal();
  };

  return (
    <>
      {children ?? (
        <S.TriggerButton onClick={() => setOpen(true)}>+ Task</S.TriggerButton>
      )}

      {open && (
        <S.Overlay>
          <S.Modal>
            <S.Title>{existing ? 'Edit Task' : 'New Task'}</S.Title>

            <div>
             <S.Input
  value={form.title}
  onChange={(e) => {
    const value = e.target.value;
    setForm({ ...form, title: value });
    if (value.trim()) setErrors((prev) => ({ ...prev, title: '' }));
  }}
  placeholder="Title"
/>

              {errors.title && <S.ErrorMsg>{errors.title}</S.ErrorMsg>}
            </div>

            <div>
            <S.Textarea
  value={form.description}
  onChange={(e) => {
    const value = e.target.value;
    setForm({ ...form, description: value });
    if (value.trim()) setErrors((prev) => ({ ...prev, description: '' }));
  }}
  placeholder="Description"
/>

              {errors.description && <S.ErrorMsg>{errors.description}</S.ErrorMsg>}
            </div>

            <div>
              <S.Input
  type="date"
  value={form.dueDate}
  onChange={(e) => {
    const value = e.target.value;
    setForm({ ...form, dueDate: value });
    if (value) setErrors((prev) => ({ ...prev, dueDate: '' }));
  }}
/>

              {errors.dueDate && <S.ErrorMsg>{errors.dueDate}</S.ErrorMsg>}
            </div>

            <div>
              <Select
                options={[
                  { value: 'Priyanka', label: 'Priyanka' },
                  { value: 'Anuska', label: 'Anuska' },
                ]}
                placeholder="Select Assignee"
                styles={customSelectStyles}
                value={
                  [{ value: 'Priyanka', label: 'Priyanka' }, { value: 'Anuska', label: 'Anuska' }]
                    .find((o) => o.value === form.assignee) || null
                }
                onChange={(opt) => {
    const value = opt?.value ?? '';
    setForm({ ...form, assignee: value });
    if (value) setErrors((prev) => ({ ...prev, assignee: '' }));
  }}
              />
              {errors.assignee && <S.ErrorMsg>{errors.assignee}</S.ErrorMsg>}
            </div>

            <div>
              <Select
                options={[
                  { value: 'todo', label: 'To Do' },
                  { value: 'in progress', label: 'In Progress' },
                  { value: 'done', label: 'Done' },
                ]}
                placeholder="Select Status"
                styles={customSelectStyles}
                value={
                  [
                    { value: 'todo', label: 'To Do' },
                    { value: 'in progress', label: 'In Progress' },
                    { value: 'done', label: 'Done' },
                  ].find((o) => o.value === form.status) || null
                }
                 onChange={(opt) => {
    const value = (opt?.value as Task['status']) ?? '';
    setForm({ ...form, status: value });
    if (value) setErrors((prev) => ({ ...prev, status: '' }));
  }}
              />
              {errors.status && <S.ErrorMsg>{errors.status}</S.ErrorMsg>}
            </div>

            <S.Actions>
              {existing && (
                <S.DeleteButton
                  onClick={() => {
                    deleteTask(projectId, existing.id);
                    closeModal();
                  }}
                >
                  Delete
                </S.DeleteButton>
              )}

              <S.CancelButton onClick={closeModal}>Cancel</S.CancelButton>
              <S.SaveButton type="button" onClick={onSubmit}>Save</S.SaveButton>
            </S.Actions>
          </S.Modal>
        </S.Overlay>
      )}
    </>
  );
}
