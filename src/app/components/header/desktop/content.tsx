
"use client"

import Link from "next/link";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import clsx from "clsx";

import logo from "@/public/logo.svg";

interface Props {
    menu: menuItem [],
    socialMedia: socialMediaItem [],
};

interface socialMediaItem {
    key: string,
    titleTag: string,
    link: string
};

interface menuItem {
    key: string,
    title: string,
    titleTag: string,
    link: string
};

const App = (props: Props) => {
    const dispatch = useDispatch();
    const pathName = usePathname();
    const headerRef = useRef<HTMLDivElement>(null);
    
    const isFixedSelector = useSelector((state: { fixed: boolean }) => {
        return state.fixed
    });

    useEffect (() => {
        if (!headerRef.current) {
            return;
        }

        const headerHeight = headerRef.current.clientHeight;

        dispatch({
            type: "header/getHeight",
            value: headerHeight
        });
    }, [headerRef, dispatch]);
        
    return (
        <header className={clsx(
            "flex w-[100%] h-[80px] bg-[#f5f5f5] py-[10px] z-[10]",
            {
                "relative": !isFixedSelector && pathName == "/",
                "fixed top-0": isFixedSelector || pathName != "/"
            }
        )} ref={headerRef}>
            <div className="w-[90%] max-w-[1140px] mx-auto flex justify-between items-center">
                    <Link href="/" title="程翊室內裝修" >
                        <Image className="image" src={logo} alt="程翊室內裝修" width={226} height={50} priority={true} />
                    </Link>

                    <ul className="flex items-center">

                        {
                            props.menu.map((item: menuItem, index: number) => {
                                return (
                                    <li className="list pr-[15px]" key={index}>
                                        <Link className={clsx(
                                            "block hover:text-[#231916]",
                                            {
                                                "pr-0": index > props.menu.length - 1,
                                                "text-[#231916]": item.link == pathName,
                                                "text-[#666]": item.link != pathName
                                            }
                                        )} href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
        </header>       
    )
};

export default App;