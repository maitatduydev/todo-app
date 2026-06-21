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
        <header className="h-14 border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 bg-white z-50">
            <h1
                className="text-md font-semibold tracking-tight"
                style={{ letterSpacing: "-0.01em" }}
            >
                {title}
            </h1>
            <div className="flex items-center gap-3">
                <div className="relative">
                    <Search
                        size={18}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Tìm kiếm công việc..."
                        className="pl-10 pr-3 py-2 text-sm border border-gray-200 rounded bg-white outline-none focus:border-gray-300 transition-colors placeholder:text-gray-400 w-100"
                    />
                    {search && (
                        <button
                            onClick={() => onSearchChange("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            <X size={11} />
                        </button>
                    )}
                </div>

                <div className="relative" data-sort>
                    <button
                        onClick={onToggleSortMenu}
                        className="flex items-center cursor-pointer gap-1.5 px-5 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50 transition-colors text-gray-500 hover:text-black"
                    >
                        <ArrowUpDown size={12} />
                        Sort
                    </button>
                    {showSortMenu && (
                        <div className=" absolute right-0 top-11 z-100 w-60 bg-background border  border-gray-200 rounded-md shadow-lg overflow-hidden">
                            {SORT_OPTIONS.map((s) => (
                                <button
                                    key={s.key}
                                    onClick={() => onSortChange(s.key)}
                                    className={`w-full text-left px-2.5 py-2.5 text-sm flex items-center justify-between hover:bg-accent transition-colors ${sortKey === s.key ? "text-foreground font-medium" : "text-muted-foreground"}`}
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
                    className="flex items-center cursor-pointer gap-1.5 px-5 py-2 text-sm font-medium bg-black text-white rounded hover:opacity-80 transition-opacity"
                >
                    <Plus size={18} strokeWidth={2.5} />
                    Thêm công việc
                </button>
            </div>
        </header>
    );
}
