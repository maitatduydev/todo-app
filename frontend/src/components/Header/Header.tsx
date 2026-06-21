import { Search, ArrowUpDown, Plus } from "lucide-react";

export default function Header() {
    return (
        <header className="h-14 border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 bg-white z-10">
            <h1 className="text-md font-semibold tracking-tight">All Tasks</h1>

            <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative">
                    <Search
                        size={18}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        placeholder="Tìm kiếm công việc"
                        className="pl-10 pr-3 py-2 text-sm border border-gray-200 rounded bg-white outline-none focus:border-black transition-colors placeholder:text-gray-400 w-100"
                    />
                </div>

                {/* Sort */}
                <button className="flex items-center cursor-pointer gap-1.5 px-5 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50 transition-colors text-gray-500 hover:text-black">
                    <ArrowUpDown size={18} />
                    Sắp xếp
                </button>

                {/* New task */}
                <button className="flex items-center cursor-pointer gap-1.5 px-5 py-2 text-sm font-medium bg-black text-white rounded hover:opacity-80 transition-opacity">
                    <Plus size={18} strokeWidth={2.5} />
                    Thêm công việc
                </button>
            </div>
        </header>
    );
}
