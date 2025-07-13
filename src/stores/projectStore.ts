
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';

export type Status = 'todo' | 'in progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: Status;
  dueDate?: string;
  assignee?:string;
}

export interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

interface ProjectState {
  projects: Project[];
  addProject: (name: string) => void;
  deleteProject: (id: string) => void;
  addTask: (projectId: string, task: Omit<Task, 'id'>) => void;
  updateTask: (projectId: string, task: Task) => void;
  deleteTask: (projectId: string, taskId: string) => void;
  moveTask: (
    projectId: string,
    taskId: string,
    toStatus: Status,
    toIndex: number
  ) => void;
}

export const useProjectStore = create<ProjectState>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      projects: [],

      addProject: name =>
        set(state => ({
          projects: [...state.projects, { id: uuid(), name, tasks: [] }],
        })),

      deleteProject: id =>
        set(state => ({ projects: state.projects.filter(p => p.id !== id) })),

      addTask: (projectId, task) =>
        set(state => ({
          projects: state.projects.map(p =>
            p.id === projectId
              ? { ...p, tasks: [...p.tasks, { ...task, id: uuid() }] }
              : p
          ),
        })),

      updateTask: (projectId, task) =>
        set(state => ({
          projects: state.projects.map(p =>
            p.id === projectId
              ? {
                  ...p,
                  tasks: p.tasks.map(t => (t.id === task.id ? task : t)),
                }
              : p
          ),
        })),

      deleteTask: (projectId, taskId) =>
        set(state => ({
          projects: state.projects.map(p =>
            p.id === projectId
              ? { ...p, tasks: p.tasks.filter(t => t.id !== taskId) }
              : p
          ),
        })),

      moveTask: (projectId, taskId, toStatus, toIndex) =>
        set(state => {
          const project = state.projects.find(p => p.id === projectId);
          if (!project) return state;
          const task = project.tasks.find(t => t.id === taskId);
          if (!task) return state;

          const filtered = project.tasks.filter(t => t.id !== taskId);
          const reordered = [
            ...filtered.slice(0, toIndex),
            { ...task, status: toStatus },
            ...filtered.slice(toIndex),
          ];

          return {
            projects: state.projects.map(p =>
              p.id === projectId ? { ...p, tasks: reordered } : p
            ),
          };
        }),
    }),
    { name: 'mini-pm-storage' } // <-- localStorage key
  )
);
