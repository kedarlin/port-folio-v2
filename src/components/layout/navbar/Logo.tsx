import Link from "next/link";

import  { siteConfig} from "@/config/site";


export default function Logo() {
    return (
        <Link 
        href="/"
        className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-70">
            {siteConfig.shortName}
        </Link>
    )
}