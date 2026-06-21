import type { Priority, Todo } from "@/types/todo";

export const TAGS = ["Design", "Dev", "Review", "Infra", "Docs", "Research"];

export const TAG_COLORS: Record<string, string> = {
    Design: "bg-[#f0f0f0] text-[#525252]",
    Dev: "bg-[#e8e8e8] text-[#404040]",
    Review: "bg-[#ebebeb] text-[#4a4a4a]",
    Infra: "bg-[#e5e5e5] text-[#3d3d3d]",
    Docs: "bg-[#eeeeee] text-[#4f4f4f]",
    Research: "bg-[#e9e9e9] text-[#454545]",
};

export const PRIORITIES: { value: Priority; label: string; dot: string; bar: string }[] = [
    { value: "urgent", label: "Urgent", dot: "bg-[#0a0a0a]", bar: "bg-[#0a0a0a]" },
    { value: "high", label: "High", dot: "bg-[#525252]", bar: "bg-[#525252]" },
    { value: "medium", label: "Medium", dot: "bg-[#a3a3a3]", bar: "bg-[#a3a3a3]" },
    { value: "low", label: "Low", dot: "bg-[#d4d4d4]", bar: "bg-[#d4d4d4]" },
];

export const PRIORITY_ORDER: Record<Priority, number> = { urgent: 0, high: 1, medium: 2, low: 3 };

export const INITIAL_TODOS: Todo[] = [
    {
        id: "1",
        text: "Review authentication middleware PR",
        note: "Check JWT expiry handling and session token compliance",
        completed: false,
        starred: true,
        priority: "urgent",
        tag: "Dev",
        dueDate: "2026-06-21",
        createdAt: new Date("2026-06-18"),
    },
    {
        id: "2",
        text: "Update design system documentation v2.4",
        note: "Add new color token table and spacing scale",
        completed: false,
        starred: false,
        priority: "high",
        tag: "Docs",
        dueDate: "2026-06-23",
        createdAt: new Date("2026-06-18"),
    },
    {
        id: "3",
        text: "Set up staging environment pipeline",
        note: "",
        completed: false,
        starred: true,
        priority: "urgent",
        tag: "Infra",
        dueDate: "2026-06-20",
        createdAt: new Date("2026-06-17"),
    },
    {
        id: "4",
        text: "Accessibility audit on dashboard components",
        note: "Use axe DevTools, focus on modal and table roles",
        completed: true,
        starred: false,
        priority: "medium",
        tag: "Review",
        dueDate: null,
        createdAt: new Date("2026-06-16"),
    },
    {
        id: "5",
        text: "Refactor Figma color token structure",
        note: "",
        completed: false,
        starred: false,
        priority: "low",
        tag: "Design",
        dueDate: "2026-06-27",
        createdAt: new Date("2026-06-15"),
    },
    {
        id: "6",
        text: "Write unit tests for edge function handlers",
        note: "Cover timeout, retry, and rate-limit paths",
        completed: true,
        starred: false,
        priority: "medium",
        tag: "Dev",
        dueDate: null,
        createdAt: new Date("2026-06-14"),
    },
    {
        id: "7",
        text: "Research competitor pricing models",
        note: "",
        completed: false,
        starred: false,
        priority: "low",
        tag: "Research",
        dueDate: "2026-07-01",
        createdAt: new Date("2026-06-13"),
    },
    {
        id: "8",
        text: "Optimize image loading in Gallery component",
        note: "Implement lazy loading + blur placeholder",
        completed: false,
        starred: false,
        priority: "medium",
        tag: "Dev",
        dueDate: "2026-06-25",
        createdAt: new Date("2026-06-12"),
    },
];
