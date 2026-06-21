import { Search, X, ArrowUpDown, Plus, Check } from "lucide-react";
import type { SortKey } from "@/types/todo";
import { SORT_OPTIONS } from "@/constants/todo";

interface TopBarProps {
    title: string;
    search: string;
    onSearchChange: (v: string) => void;
    sortKey: SortKey;
    onSortChange: (k: SortKey) => void;
    showSortMenu: boolean;
    onToggleSortMenu: () => void;
    onAddClick: () => void;
}

export function TopBar({
    title,
    search,
    onSearchChange,
    sortKey,
    onSortChange,
    showSortMenu,
    onToggleSortMenu,
    onAddClick,
}: TopBarProps) {
    return (
        <header className="h-14 border-b border-border flex items-center justify-between px-8 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
            <h1
                className="text-sm font-semibold tracking-tight"
                style={{ letterSpacing: "-0.01em" }}
            >
                {title}
            </h1>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <Search
                        size={12}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search tasks…"
                        className="pl-7 pr-7 py-1.5 text-xs border border-border rounded bg-background outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground w-44"
                    />
                    {search && (
                        <button
                            onClick={() => onSearchChange("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            <X size={11} />
                        </button>
                    )}
                </div>

                <div className="relative" data-sort>
                    <button
                        onClick={onToggleSortMenu}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                    >
                        <ArrowUpDown size={12} />
                        Sort
                    </button>
                    {showSortMenu && (
                        <div className="absolute right-0 top-9 z-30 w-40 bg-background border border-border rounded-md shadow-lg overflow-hidden">
                            {SORT_OPTIONS.map((s) => (
                                <button
                                    key={s.key}
                                    onClick={() => onSortChange(s.key)}
                                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-accent transition-colors ${sortKey === s.key ? "text-foreground font-medium" : "text-muted-foreground"}`}
                                >
                                    {s.label}
                                    {sortKey === s.key && <Check size={11} strokeWidth={2.5} />}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <button
                    onClick={onAddClick}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-foreground text-background rounded hover:opacity-80 transition-opacity"
                >
                    <Plus size={13} strokeWidth={2.5} />
                    New task
                </button>
            </div>
        </header>
    );
}
