export default function Progress() {
    return (
        <div className="px-5 py-4 border-b border-gray-200">
            <div className="flex justify-between text-[13px] text-gray-400 mb-2.5">
                <span>Tiến trình</span>
                <span>50%</span>
            </div>

            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-black rounded-full transition-all duration-500"
                    style={{ width: "50%" }}
                />
            </div>

            <div className="flex justify-between text-[13px] text-gray-400 mt-2.5">
                <span>4 hoàn thành</span>
                <span>4 còn lại</span>
            </div>
        </div>
    );
}
