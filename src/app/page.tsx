
import Desktop from "./home/desktop";
import Mobile from "./home/mobile";

import { headers } from "next/headers";

export const metadata = {
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: "室內裝修YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。 YOCICO和程翊夥伴們相信，唯有設身處地為屋主著想，才能量身打造出獨一無二的客製化設計。",
    keywords: "程翊室內裝修",
    openGraph: {
        title: process.env.NEXT_PUBLIC_SITE_NAME,
        description: "程翊室內裝修YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。 YOCICO和程翊夥伴們相信，唯有設身處地為屋主著想，才能量身打造出獨一無二的客製化設計。",
        url: process.env.NEXT_PUBLIC_SITE_BASE,
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_BASE
    }
};

const App = async () => {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const isMobile = /mobile/i.test(userAgent)

    return (
        <>
            {
                (() => {
                    if (isMobile) {
                        return (
                            <Mobile />
                        );
                    }
                    else {
                        return (
                            <Desktop />
                        );
                    }
                })()
            }
        </>
    );
};

export default App;