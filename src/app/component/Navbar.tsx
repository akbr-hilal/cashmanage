import Link from "next/link";
import React from "react";

const Navbar = () => {
    const [shadow, setShadow] = React.useState(false);
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleShadow);
    }, [])
    return (
        <div className={shadow ? " fixed w-full h-16 shadow-xl z-[100] bg-[#ffffff]" : " fixed w-full h-16 z-[100] "}>
            <div className="flex w-full h-full flex-wrap items-center justify-between px-8 2xl:px-16">
                <Link href="/">
                    <p className="text-[#22577A] font-bold">CashManage</p>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;