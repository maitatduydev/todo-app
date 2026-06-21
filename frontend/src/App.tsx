import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
    return (
        <div className="min-h-screen bg-white flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <div className="flex-1 min-w-0 flex flex-col">
                {/* Header */}
                <Header />

                {/* Content */}
                <main className="flex-1 px-8 py-8">
                    <p className="text-sm text-gray-400">Content</p>
                </main>
            </div>
        </div>
    );
}
