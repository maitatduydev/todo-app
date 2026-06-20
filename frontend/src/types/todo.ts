export type Priority = "urgent" | "high" | "medium" | "low";
export type Filter = "all" | "today" | "starred" | "completed" | string;
export type SortKey = "createdAt" | "priority" | "dueDate" | "name";

export interface ITodo {
    id: string;
    text: string;
    note: string;
    completed: boolean;
    starred: boolean;
    priority: Priority;
    tag: string;
    dueDate: string | null;
    createdAt: Date;
}
