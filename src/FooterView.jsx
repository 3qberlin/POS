import { basePath } from "./basePathView"

export default function Footer() {
    return (
        <div className="bg-neutral-0 text-16 lg:text-20">
            <ul className="container mx-auto px-16 md:px-0 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between pt-24 pb-16 gap-20 items-center">
                <li>
                    <a href="#" className="flex gap-8">
                        <img src={`${basePath}/icons/Logo.png`} alt="Logo" width={24} height={24} />
                        <p className="my-auto">美好食光 | 訂位系統</p>
                    </a>
                </li>
                <li>
                    © 2024 - By bbnet. All rights reserved.
                </li>
                <li>
                    <a href="mailto:sales@bbnet.com.tw">sales@bbnet.com.tw
                        <span className="email material-symbols-outlined ml-8 lg:ml-16">mail</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}