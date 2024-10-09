'use client';
import React, { useEffect, useState } from "react";
import {
    FiArrowRight,
    FiBarChart2,
    FiChevronDown,
    FiHome,
    FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Link from "next/link";

const ShiftingDropDown = () => {
    return (
        <div className="flex z-50 justify-start text-neutral-200 lg:justify-center">
            <Tabs />
        </div>
    );
};

export default ShiftingDropDown;

const Tabs = () => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);
    const [isTrue, setIsTrue] = useState(false);

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }

        setSelected(val);
    };

    return (
        <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex h-fit px-3 py-2 lg:flex-row text-sm lg:text-[16px] w-full items-center flex-col"
            data-aos="fade-up"
            data-aos-delay="200"
        >
            {TABS.map((t) => {
                return (
                    <Tab
                        key={t.id}
                        selected={selected}
                        handleSetSelected={handleSetSelected}
                        tab={t.id}
                    >
                        {t.title}
                    </Tab>
                );
            })}

            <AnimatePresence>
                {selected && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
    const { transparent } = useSelector(state => state.user);

    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`flex items-center gap-1 rounded-full py-1.5 w-full justify-center lg:px-3 text-md transition-colors text-white ${transparent ? "lg:text-white" : "lg:text-black"} ${selected === tab
                ? ""
                : ""
                }`}
            data-aos="fade-up"
            data-aos-delay="200"
        >
            <span>{children}</span>
            <FiChevronDown
                className={`transition-transform ${selected === tab ? "rotate-180" : ""
                    }`}
            />
        </button>
    );
};

const Content = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
                transition: {
                    delay: .25,
                },
            }}
            className={`absolute ${selected === 1 && 'lg:-left-[223px] top-[calc(100%_+_-200px)] sm:top-[calc(100%_+_-70px)]'} ${selected === 2 && 'lg:-right-[180px] top-[calc(100%_+_-30px)]'} ${selected === 3 && 'lg:left-36 top-[calc(100%_+_0px)]'} lg:top-[calc(100%_+_24px)] rounded-lg border border-neutral-200 shadow bg-gradient-to-b from-white via-white to-white p-3`}
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((t) => {
                return (
                    <div className="overflow-hidden" key={t.id}>
                        {selected === t.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <t.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};

const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-400 lg:block hidden"
        />
    );
};

const Services = () => {
    const { imgUrl } = useSelector(state => state.user);

    const webDevelopment = [
        { path: "/web", name: "Web Development" },
        { path: "/app", name: "App Development" },
        { path: "/Apiintegraton", name: "API Development and Integration" },
    ]

    const graphicDesigning = [
        { path: "/logo", name: "Logo Design" },
        { path: "/branding", name: "Branding" },
        { path: "/illustration", name: "Illustration" },
    ]

    const SEOOptimization = [
        { path: "/softwareengineer", name: "Softwar Engineer" },
        { path: "/devops", name: "Devops" },
        { path: "/qaengineer", name: "Qaengineer" },
    ]

    return (
        <div>
            <div className="lg:w-[900px]">
                <div className="flex justify-between gap-4">
                    <div className="md:block hidden">
                        <div className="my-2 hover:bg-gray-100 p-2 rounded cursor-pointer">
                            <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-red">IT Park</h3>
                            <h4 className="text-black hover:text-purpleColor/90 text-[12px] md:text-[14px] font-medium">Zaitoon Ashraf IT Park</h4>
                        </div>
                        <img src={imgUrl} alt="IT Park" className="w-60 rounded-lg" />
                    </div>
                    <hr className="h-64 m-auto border-l border-t-0 border-gray-200 md:block hidden" />
                    <div>
                        <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-red">Web & App Development</h3>
                        {
                            webDevelopment?.length > 0 ? (
                                webDevelopment?.map((item, index) => {
                                    return (
                                        <Link to={item.path} key={index} className="flex justify-between text-left items-center my-2 text-[13px] md:text-sm text-neutral-700 hover:text-purpleColor/90 hover:bg-gray-100 p-2 transition rounded hover:text-green">
                                            {item.name} <FiArrowRight className="hidden lg:block" />
                                        </Link>
                                    )
                                })
                            )
                                : <>No Results</>
                        }
                    </div>
                    <div>
                        <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-red">Graphic Designing</h3>
                        {
                            graphicDesigning?.length > 0 ? (
                                graphicDesigning?.map((item, index) => {
                                    return (
                                        <Link to={item.path} key={index} className="flex justify-between items-center text-left my-2 text-[13px] md:text-sm text-neutral-700 hover:text-purpleColor/90 hover:bg-gray-100 p-2 transition rounded hover:text-green">
                                            {item.name} <FiArrowRight className="hidden lg:block" />
                                        </Link>
                                    )
                                })
                            )
                                : <>No Results</>
                        }
                    </div>
                    <div>
                        <h3 className="mb-2 text-[14px] md:text-[16px] font-medium text-red">SEO Optimization</h3>
                        {
                            SEOOptimization?.length > 0 ? (
                                SEOOptimization?.map((item, index) => {
                                    return (
                                        <Link to={item.path} key={index} className="flex justify-between items-center text-left my-2 text-[13px] md:text-sm text-neutral-700 hover:text-purpleColor/90 hover:bg-gray-100 p-2 transition rounded hover:text-green">
                                            {item.name} <FiArrowRight className="hidden lg:block" />
                                        </Link>
                                    )
                                })
                            )
                                : <>No Results</>
                        }
                    </div>
                </div>
                <Link to={`/campuses`} className="flex justify-end items-center"><p className="px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 text-blue-700 flex items-center justify-end">See All <FiArrowRight /></p></Link>
            </div >
        </div >
    );
}

const TABS = [
    {
        title: "Services",
        Component: Services,
    }
].map((n, idx) => ({ ...n, id: idx + 1 }));