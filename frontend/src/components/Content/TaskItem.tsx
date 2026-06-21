import { AlignLeft, Clock, MoreHorizontal, Star } from "lucide-react";

export default function TaskItem() {
    return (
        <div className="group flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-50 transition-colors">
            <div className="w-0.5 h-8 rounded-full bg-black shrink-0 opacity-60" />
            <button className="shrink-0 size-4 rounded border-[1.5px] border-gray-300 hover:border-black transition-colors" />
            <span className="text-sm flex-1">Bàn giao dự án cho khách hàng</span>
            <div className="flex items-center gap-5 shrink-0">
                <span className="text-[12px] px-2.5 py-1.5 rounded font-medium bg-gray-100 text-gray-500">
                    Phát triển
                </span>

                <span className="flex items-center gap-1 text-[12px] text-gray-400">
                    <span className="size-1.5 rounded-full bg-black inline-block" />
                    Cấp Bách
                </span>

                <span className="text-[12px] text-gray-500 flex items-center gap-2">
                    <Clock size={18} /> Hôm nay
                </span>
            </div>

            <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="size-6 flex items-center justify-center rounded text-gray-400 hover:text-black hover:bg-gray-100 transition-colors">
                    <Star size={15} />
                </button>
                <button className="size-6 flex items-center justify-center rounded text-gray-400 hover:text-black hover:bg-gray-100 transition-colors">
                    <AlignLeft size={15} />
                </button>
                <button className="size-6 flex items-center justify-center rounded text-gray-400 hover:text-black hover:bg-gray-100 transition-colors">
                    <MoreHorizontal size={15} />
                </button>
            </div>
        </div>
    );
}
