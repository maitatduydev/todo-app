import Footer from "./Footer";
import Logo from "./Logo";
import Nav from "./Nav";
import Progress from "./Progress";

export default function () {
    return (
        <aside className="w-65 shrink-0 border-r border-gray-200 bg-gray-50 h-screen sticky top-0">
            {/* Logo */}
            <Logo />

            {/* Progress */}
            <Progress />

            {/* Nav */}
            <Nav />

            {/* Footer */}
            <Footer />
        </aside>
    );
}
