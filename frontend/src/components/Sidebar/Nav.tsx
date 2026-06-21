import { FILTERS, TAGS } from "../../constants/sidebar";
import SideLink from "./SideLink";
import { useState } from "react";

export default function Nav() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [activeTag, setActiveTag] = useState<string | null>(null);

    return (
        <nav className="flex-1 px-3 py-3 space-y-2">
            {FILTERS.map((f) => {
                const Icon = f.icon;

                return (
                    <SideLink
                        key={f.key}
                        icon={<Icon size={18} />}
                        label={f.label}
                        badge={1}
                        active={activeFilter === f.key}
                        onClick={() => {
                            setActiveFilter((prev) => (prev === f.key ? null : f.key));
                        }}
                    />
                );
            })}

            <div className="pt-3 pb-1 px-2 text-[10px] font-medium tracking-widest text-gray-400 uppercase">
                Tags
            </div>

            {TAGS.map((tag) => (
                <SideLink
                    key={tag}
                    icon={
                        <span
                            className={`size-2 rounded-full bg-black/40 inline-block ${
                                activeTag === tag
                                    ? "bg-white"
                                    : "text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
                            }`}
                        />
                    }
                    label={tag}
                    badge={1}
                    active={activeTag === tag}
                    onClick={() => {
                        setActiveTag((prev) => (prev === tag ? null : tag));
                    }}
                />
            ))}
        </nav>
    );
}
