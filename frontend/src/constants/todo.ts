import type { Priority, SortKey, Todo } from "@/types/todo";

export const TAGS = ["Thiết kế", "Lập trình", "Đánh giá", "Hạ tầng", "Tài liệu", "Nghiên cứu"];

export const TAG_COLORS: Record<string, string> = {
    "Thiết kế": "bg-[#f0f0f0] text-[#525252]",
    "Lập trình": "bg-[#e8e8e8] text-[#404040]",
    "Đánh giá": "bg-[#ebebeb] text-[#4a4a4a]",
    "Hạ tầng": "bg-[#e5e5e5] text-[#3d3d3d]",
    "Tài liệu": "bg-[#eeeeee] text-[#4f4f4f]",
    "Nghiên cứu": "bg-[#e9e9e9] text-[#454545]",
};

export const PRIORITIES: {
    value: Priority;
    label: string;
    dot: string;
    bar: string;
}[] = [
    {
        value: "urgent",
        label: "Khẩn cấp",
        dot: "bg-[#0a0a0a]",
        bar: "bg-[#0a0a0a]",
    },
    {
        value: "high",
        label: "Cao",
        dot: "bg-[#525252]",
        bar: "bg-[#525252]",
    },
    {
        value: "medium",
        label: "Trung bình",
        dot: "bg-[#a3a3a3]",
        bar: "bg-[#a3a3a3]",
    },
    {
        value: "low",
        label: "Thấp",
        dot: "bg-[#d4d4d4]",
        bar: "bg-[#d4d4d4]",
    },
];

export const PRIORITY_ORDER: Record<Priority, number> = {
    urgent: 0,
    high: 1,
    medium: 2,
    low: 3,
};

export const INITIAL_TODOS: Todo[] = [
    {
        id: "1",
        text: "Kiểm tra PR middleware xác thực",
        note: "Kiểm tra xử lý thời hạn JWT và tính tuân thủ của session token",
        completed: false,
        starred: true,
        priority: "urgent",
        tag: "Lập trình",
        dueDate: "2026-06-21",
        createdAt: new Date("2026-06-18"),
    },
    {
        id: "2",
        text: "Cập nhật tài liệu hệ thống thiết kế phiên bản 2.4",
        note: "Thêm bảng màu token mới và hệ thống khoảng cách",
        completed: false,
        starred: false,
        priority: "high",
        tag: "Tài liệu",
        dueDate: "2026-06-23",
        createdAt: new Date("2026-06-18"),
    },
    {
        id: "3",
        text: "Thiết lập pipeline môi trường staging",
        note: "",
        completed: false,
        starred: true,
        priority: "urgent",
        tag: "Hạ tầng",
        dueDate: "2026-06-20",
        createdAt: new Date("2026-06-17"),
    },
    {
        id: "4",
        text: "Đánh giá khả năng truy cập của các component dashboard",
        note: "Sử dụng axe DevTools, tập trung vào modal và bảng",
        completed: true,
        starred: false,
        priority: "medium",
        tag: "Đánh giá",
        dueDate: null,
        createdAt: new Date("2026-06-16"),
    },
    {
        id: "5",
        text: "Tái cấu trúc hệ thống màu trong Figma",
        note: "",
        completed: false,
        starred: false,
        priority: "low",
        tag: "Thiết kế",
        dueDate: "2026-06-27",
        createdAt: new Date("2026-06-15"),
    },
    {
        id: "6",
        text: "Viết unit test cho edge function handler",
        note: "Kiểm tra timeout, retry và giới hạn request",
        completed: true,
        starred: false,
        priority: "medium",
        tag: "Lập trình",
        dueDate: null,
        createdAt: new Date("2026-06-14"),
    },
    {
        id: "7",
        text: "Nghiên cứu mô hình giá của đối thủ cạnh tranh",
        note: "",
        completed: false,
        starred: false,
        priority: "low",
        tag: "Nghiên cứu",
        dueDate: "2026-07-01",
        createdAt: new Date("2026-06-13"),
    },
    {
        id: "8",
        text: "Tối ưu tải hình ảnh trong component Gallery",
        note: "Triển khai lazy loading và ảnh placeholder làm mờ",
        completed: false,
        starred: false,
        priority: "medium",
        tag: "Lập trình",
        dueDate: "2026-06-25",
        createdAt: new Date("2026-06-12"),
    },
];

export const SORT_OPTIONS: { key: SortKey; label: string }[] = [
    { key: "createdAt", label: "Date created" },
    { key: "priority", label: "Priority" },
    { key: "dueDate", label: "Due date" },
    { key: "name", label: "Name" },
];
