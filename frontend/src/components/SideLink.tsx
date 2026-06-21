import type { ReactNode } from "react";

interface SideLinkProps {
    icon: ReactNode;
    label: string;
    badge: number;
    active: boolean;
    onClick: () => void;
}

export default function SideLink({ icon, label, badge, active, onClick }: SideLinkProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full cursor-pointer flex items-center justify-between px-2 py-2.5 rounded text-sm transition-colors ${
                active
                    ? "bg-black text-white"
                    : "text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
            }`}
        >
            <span className="flex items-center gap-3">
                {icon}
                {label}
            </span>
            {badge > 0 && (
                <span
                    className={`text-[12px] font-semibold w-5.5 h-5.5 flex items-center justify-center rounded-full tabular-nums ${active ? "bg-white/20" : "bg-gray-200 text-gray-500"}`}
                >
                    {badge}
                </span>
            )}
        </button>
    );
}
