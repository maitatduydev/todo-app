import { Check, Inbox, Calendar, Star } from "lucide-react";
import type { Filter } from "@/types/todo";
import { TAGS } from "@/constants/todo";
import SideLink from "./SideLink";

interface SidebarProps {
    filter: Filter;
    onFilterChange: (f: Filter) => void;
    progressPct: number;
    completedCount: number;
    remainingCount: number;
    allCount: number;
    todayCount: number;
    starredCount: number;
    tagCounts: Record<string, number>;
}

export function Sidebar({
    filter,
    onFilterChange,
    progressPct,
    completedCount,
    remainingCount,
    allCount,
    todayCount,
    starredCount,
    tagCounts,
}: SidebarProps) {
    return (
        <aside className="w-65 shrink-0 border-r border-gray-200 bg-gray-50 h-screen sticky top-0">
            <div className="h-14 flex items-center px-5 border-b border-gray-200">
                <span className="text-xl font-semibold">Todo App</span>
            </div>

            <div className="px-5 py-4 border-b border-gray-200">
                <div className="flex justify-between text-[13px] text-gray-400 mb-2.5">
                    <span>Tiến trình</span>
                    <span>{progressPct}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-black rounded-full transition-all duration-500"
                        style={{ width: `${progressPct}%` }}
                    />
                </div>
                <div className="flex justify-between text-[13px] text-gray-400 mt-2.5">
                    <span>{completedCount} hoàn thành</span>
                    <span>{remainingCount} còn lại</span>
                </div>
            </div>

            <nav className="flex-1 px-3 py-3 space-y-2.5 overflow-y-auto">
                <SideLink
                    icon={<Inbox size={18} />}
                    label="Tất cả công việc"
                    badge={allCount}
                    active={filter === "all"}
                    onClick={() => onFilterChange("all")}
                />
                <SideLink
                    icon={<Calendar size={18} />}
                    label="Hôm nay"
                    badge={todayCount}
                    active={filter === "today"}
                    onClick={() => onFilterChange("today")}
                />
                <SideLink
                    icon={<Star size={18} />}
                    label="Quan trọng"
                    badge={starredCount}
                    active={filter === "starred"}
                    onClick={() => onFilterChange("starred")}
                />
                <SideLink
                    icon={<Check size={18} />}
                    label="Hoàn thành"
                    badge={completedCount}
                    active={filter === "completed"}
                    onClick={() => onFilterChange("completed")}
                />

                <div className="pt-3 pb-1 px-2 text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                    Tags
                </div>

                {TAGS.map((t) => (
                    <SideLink
                        key={t}
                        icon={
                            <span
                                className={`size-2 rounded-full bg-black/40 inline-block ${
                                    filter === t
                                        ? "bg-white"
                                        : "text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
                                }`}
                            />
                        }
                        label={t}
                        badge={tagCounts[t] ?? 0}
                        active={filter === t}
                        onClick={() => onFilterChange(t)}
                    />
                ))}
            </nav>

            <div className="px-5 py-4 border-t border-gray-200 absolute bottom-0 w-full">
                <div className="font-medium text-[15px] mb-2">Không gian làm việc</div>
                <div className="text-[13px] text-gray-400">Cá nhân - Gói miễn phí</div>
            </div>
        </aside>
    );
}
