export default function App() {
    return (
        <div className="min-h-screen bg-white flex">
            {/* Sidebar */}
            <aside className="w-56 shrink-0 border-r border-gray-200 bg-gray-50 h-screen sticky top-0">
                <p className="p-4 text-sm text-gray-400">Sidebar</p>
            </aside>

            {/* Main */}
            <div className="flex-1 min-w-0 flex flex-col">
                {/* Header */}
                <header className="h-14 border-b border-gray-200 flex items-center px-8">
                    <p className="text-sm text-gray-400">Header</p>
                </header>

                {/* Content */}
                <main className="flex-1 px-8 py-8">
                    <p className="text-sm text-gray-400">Content</p>
                </main>
            </div>
        </div>
    );
}
