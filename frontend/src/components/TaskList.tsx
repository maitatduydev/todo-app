import type { Todo } from "@/types/todo";
import { TaskRow } from "./TaskRow";

interface TaskListProps {
    todos: Todo[];
    expandedId: string | null;
    menuId: string | null;
    editingNoteId: string | null;
    onExpand: (id: string) => void;
    onMenuToggle: (id: string) => void;
    onMenuClose: () => void;
    onEditNote: (id: string) => void;
    onToggle: (id: string) => void;
    onStar: (id: string) => void;
    onDelete: (id: string) => void;
    onNoteChange: (id: string, note: string) => void;
    dimmed?: boolean;
}

export function TaskList({
    todos,
    expandedId,
    menuId,
    editingNoteId,
    onExpand,
    onMenuToggle,
    onMenuClose,
    onEditNote,
    onToggle,
    onStar,
    onDelete,
    onNoteChange,
    dimmed,
}: TaskListProps) {
    return (
        <div
            className={`border border-border rounded-md overflow-hidden divide-y divide-border ${dimmed ? "opacity-60" : ""}`}
        >
            {todos.map((todo) => (
                <TaskRow
                    key={todo.id}
                    todo={todo}
                    expanded={expandedId === todo.id}
                    menuOpen={menuId === todo.id}
                    editingNote={editingNoteId === todo.id}
                    onToggle={() => onToggle(todo.id)}
                    onStar={() => onStar(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                    onExpand={() => onExpand(todo.id)}
                    onMenuToggle={() => onMenuToggle(todo.id)}
                    onEditNote={() => onEditNote(todo.id)}
                    onNoteChange={(n) => onNoteChange(todo.id, n)}
                    onMenuClose={onMenuClose}
                />
            ))}
        </div>
    );
}
