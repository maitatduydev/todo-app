import type { ReactNode } from "react";

interface SideLinkProps {
    icon: ReactNode;
    label: string;
    badge: number;
    active: boolean;
    onClick: () => void;
}

export function SideLink({ icon, label, badge, active, onClick }: SideLinkProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-xs transition-colors ${
                active
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
        >
            <span className="flex items-center gap-2">
                {icon}
                {label}
            </span>
            {badge > 0 && (
                <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full tabular-nums ${active ? "bg-background/20 text-background" : "bg-border text-muted-foreground"}`}
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                    {badge}
                </span>
            )}
        </button>
    );
}
