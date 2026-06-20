export function genId(): string {
    return Math.random().toString(36).substring(2, 10);
}

export function isToday(dateStr: string | null): boolean {
    if (!dateStr) return false;

    const d = new Date(dateStr);
    const now = new Date();

    return (
        d.getFullYear() === now.getFullYear() &&
        d.getMonth() === now.getMonth() &&
        d.getDate() === now.getDate()
    );
}

export function isPast(dateStr: string | null): boolean {
    if (!dateStr) return false;
    return new Date(dateStr) < new Date();
}

export function fmtDate(dateStr: string): string {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = Math.ceil((d.getTime() - now.getTime()) / 86_400_000);

    if (diff === 0) return "Today";
    if (diff === 1) return "Tomorrow";
    if (diff === -1) return "Yesterday";

    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
