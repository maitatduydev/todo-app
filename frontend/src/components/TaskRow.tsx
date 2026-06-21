import {
    Check,
    ChevronDown,
    ChevronRight,
    Star,
    AlignLeft,
    MoreHorizontal,
    Clock,
} from "lucide-react";
import type { Todo } from "@/types/todo";
import { PRIORITIES, TAG_COLORS } from "@/constants/todo";
import { isPast, isToday, fmtDate } from "@/utils/todo";

interface TaskRowProps {
    todo: Todo;
    expanded: boolean;
    menuOpen: boolean;
    editingNote: boolean;
    onToggle: () => void;
    onStar: () => void;
    onDelete: () => void;
    onExpand: () => void;
    onMenuToggle: () => void;
    onEditNote: () => void;
    onNoteChange: (n: string) => void;
    onMenuClose: () => void;
}

export function TaskRow({
    todo,
    expanded,
    menuOpen,
    editingNote,
    onToggle,
    onStar,
    onDelete,
    onExpand,
    onMenuToggle,
    onEditNote,
    onNoteChange,
    onMenuClose,
}: TaskRowProps) {
    const p = PRIORITIES.find((x) => x.value === todo.priority)!;
    const overdue = !todo.completed && isPast(todo.dueDate) && !isToday(todo.dueDate);

    return (
        <div className="bg-background group">
            <div
                className={`flex items-center gap-3 px-4 py-3 ${!todo.completed ? "hover:bg-[#fafafa]" : ""} transition-colors`}
            >
                <div className={`w-0.5 h-8 rounded-full ${p.bar} shrink-0 opacity-60`} />

                <button
                    onClick={onToggle}
                    className={`shrink-0 size-4 rounded border-[1.5px] flex items-center justify-center transition-all ${
                        todo.completed
                            ? "bg-foreground border-foreground"
                            : "border-border hover:border-foreground"
                    }`}
                >
                    {todo.completed && (
                        <Check size={9} strokeWidth={3} className="text-background" />
                    )}
                </button>

                <button
                    onClick={onExpand}
                    className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                >
                    {expanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                </button>

                <div className="flex-1 min-w-0">
                    <span
                        className={`text-sm leading-snug block truncate ${todo.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
                    >
                        {todo.text}
                    </span>
                    {todo.note && !expanded && (
                        <span className="text-[11px] text-muted-foreground block truncate mt-0.5 leading-snug">
                            {todo.note}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${TAG_COLORS[todo.tag] ?? "bg-accent text-muted-foreground"}`}
                    >
                        {todo.tag}
                    </span>
                    <span
                        className="flex items-center gap-1 text-[11px] text-muted-foreground"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                        <span className={`size-1.5 rounded-full ${p.dot}`} />
                        {p.label}
                    </span>
                    {todo.dueDate && (
                        <span
                            className={`text-[11px] flex items-center gap-1 ${overdue ? "text-destructive" : "text-muted-foreground"}`}
                            style={{ fontFamily: "'Geist Mono', monospace" }}
                        >
                            <Clock size={10} />
                            {fmtDate(todo.dueDate)}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={onStar}
                        className={`size-6 flex items-center justify-center rounded transition-colors hover:bg-accent ${todo.starred ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    >
                        <Star size={12} fill={todo.starred ? "currentColor" : "none"} />
                    </button>
                    <button
                        onClick={onEditNote}
                        className="size-6 flex items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                        <AlignLeft size={12} />
                    </button>

                    <div className="relative" data-menu>
                        <button
                            onClick={onMenuToggle}
                            className="size-6 flex items-center justify-center rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        >
                            <MoreHorizontal size={13} />
                        </button>
                        {menuOpen && (
                            <div className="absolute right-0 top-8 z-30 w-40 bg-background border border-border rounded-md shadow-lg overflow-hidden">
                                <button
                                    onClick={() => {
                                        onToggle();
                                        onMenuClose();
                                    }}
                                    className="w-full text-left px-3 py-2 text-xs hover:bg-accent transition-colors"
                                >
                                    {todo.completed ? "Mark active" : "Mark done"}
                                </button>
                                <button
                                    onClick={() => {
                                        onStar();
                                        onMenuClose();
                                    }}
                                    className="w-full text-left px-3 py-2 text-xs hover:bg-accent transition-colors"
                                >
                                    {todo.starred ? "Remove star" : "Add star"}
                                </button>
                                <div className="h-px bg-border" />
                                <button
                                    onClick={() => onDelete()}
                                    className="w-full text-left px-3 py-2 text-xs text-destructive hover:bg-accent transition-colors"
                                >
                                    Delete task
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {expanded && (
                <div className="px-4 pb-3 ml-13 border-t border-border/50 pt-3 bg-[#fafafa]">
                    {editingNote ? (
                        <textarea
                            autoFocus
                            value={todo.note}
                            onChange={(e) => onNoteChange(e.target.value)}
                            onBlur={onEditNote}
                            placeholder="Add a note…"
                            rows={3}
                            className="w-full text-xs text-muted-foreground bg-transparent outline-none resize-none leading-relaxed placeholder:text-muted-foreground/60"
                        />
                    ) : (
                        <p
                            onClick={onEditNote}
                            className={`text-xs leading-relaxed cursor-text ${todo.note ? "text-muted-foreground" : "text-muted-foreground/40 italic"}`}
                        >
                            {todo.note || "Click to add a note…"}
                        </p>
                    )}
                    <div
                        className="flex items-center gap-4 mt-2 pt-2 border-t border-border/40 text-[10px] text-muted-foreground/70"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                        <span>
                            Created{" "}
                            {todo.createdAt.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                        {todo.dueDate && (
                            <span className={overdue ? "text-destructive" : ""}>
                                {overdue ? "Overdue · " : "Due · "}
                                {fmtDate(todo.dueDate)}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
