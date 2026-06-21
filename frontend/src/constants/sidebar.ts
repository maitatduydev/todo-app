import { Inbox, Calendar, Star, Check, X } from "lucide-react";

export const TAGS = ["Thiết kế", "Phát triển", "Đánh giá", "Tài liệu", "Nghiên cứu"] as const;

export const FILTERS = [
    {
        key: "all",
        icon: Inbox,
        label: "Tất cả công việc",
    },
    {
        key: "today",
        icon: Calendar,
        label: "Hôm nay",
    },
    {
        key: "important",
        icon: Star,
        label: "Quan trọng",
    },
    {
        key: "completed",
        icon: Check,
        label: "Hoàn thành",
    },
    {
        key: "pending",
        icon: X,
        label: "Chưa hoàn thành",
    },
] as const;
