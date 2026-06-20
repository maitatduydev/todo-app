import type { Priority, SortKey } from "../types/todo";

export const TAGS = ["Design", "Dev", "Review", "Infra", "Docs", "Research"] as const;

export const TAG_COLORS: Record<string, string> = {
    Design: "bg-[#f0f0f0] text-[#525252]",
    Dev: "bg-[#e8e8e8] text-[#404040]",
    Review: "bg-[#ebebeb] text-[#4a4a4a]",
    Infra: "bg-[#e5e5e5] text-[#3d3d3d]",
    Docs: "bg-[#eeeeee] text-[#4f4f4f]",
    Research: "bg-[#e9e9e9] text-[#454545]",
};

export const PRIORITIES: {
    value: Priority;
    label: string;
    dot: string;
    bar: string;
}[] = [
    { value: "urgent", label: "Urgent", dot: "bg-[#0a0a0a]", bar: "bg-[#0a0a0a]" },
    { value: "high", label: "High", dot: "bg-[#525252]", bar: "bg-[#525252]" },
    { value: "medium", label: "Medium", dot: "bg-[#a3a3a3]", bar: "bg-[#a3a3a3]" },
    { value: "low", label: "Low", dot: "bg-[#d4d4d4]", bar: "bg-[#d4d4d4]" },
];

export const PRIORITY_ORDER: Record<Priority, number> = {
    urgent: 0,
    high: 1,
    medium: 2,
    low: 3,
};

export const SORT_OPTIONS: { key: SortKey; label: string }[] = [
    { key: "createdAt", label: "Date created" },
    { key: "priority", label: "Priority" },
    { key: "dueDate", label: "Due date" },
    { key: "name", label: "Name" },
];

export const FILTER_TITLE: Record<string, string> = {
    all: "All Tasks",
    today: "Due Today",
    starred: "Starred",
    completed: "Completed",
    ...Object.fromEntries(TAGS.map((t) => [t, t])),
};
