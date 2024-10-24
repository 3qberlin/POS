import { basePath } from "./basePathView";
import NavTabs from './NavTabsView';

export default function LoginRegister() {
    return (
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap">
            <div className="bg-desktop bg-no-repeat h-screen lg:w-2/5 lg:bg-contain relative hidden lg:block">
                <img src={`${basePath}/decoration/Forks.png`} alt="bowl" width={83} height={77} className="absolute top-220 left-80" />
                <img src={`${basePath}/decoration/Bowl.png`} alt="bowl" width={83} height={77} className="absolute bottom-240 left-48" />
                <ul className="absolute top-440 left-140 flex gap-12 flex-col">
                    <li className="flex">
                        <div>
                            <img src={`${basePath}/icons/Check.png`} alt="check" width={24} height={24} />
                        </div>
                        <p className="ml-8 text-18">紅利積點</p>
                    </li>
                    <li className="flex">
                        <div>
                            <img src={`${basePath}/icons/Check.png`} alt="check" width={24} height={24} />
                        </div>
                        <p className="ml-8 text-18">優惠通知</p>
                    </li>
                    <li className="flex">
                        <div>
                            <img src={`${basePath}/icons/Check.png`} alt="check" width={24} height={24} />
                        </div>
                        <p className="ml-8 text-18">歷史資料</p>
                    </li>
                </ul>
            </div>
            <div className="bg-mobile bg-no-repeat h-164 md:h-320 w-full bg-cover relative lg:hidden block">
                <img src={`${basePath}/decoration/Forks.png`} alt="bowl" width={48} height={48} className="absolute inset-y-40 md:inset-y-140 left-40" />
                <img src={`${basePath}/decoration/Bowl.png`} alt="bowl" width={48} height={48} className="absolute inset-y-100 md:inset-y-240 right-40" />
                <ul className="left-132 top-32 md:left-280 md:top-120 absolute">
                    <li className="flex">
                        <img src={`${basePath}/icons/Check.png`} alt="check" width={24} height={24} />
                        <p className="ml-8 text-18 text-nowrap">紅利積點</p>
                    </li>
                    <li className="flex mt-8">
                        <img src={`${basePath}/icons/Check.png`} alt="check" width={24} height={24} />
                        <p className="ml-8 text-18 text-nowrap">優惠通知</p>
                    </li>
                    <li className="flex mt-8">
                        <img src={`${basePath}/icons/Check.png`} alt="check" width={24} height={24} />
                        <p className="ml-8 text-18 text-nowrap">歷史資料</p>
                    </li>
                </ul>
            </div>
            <div className="w-full lg:w-3/5 pt-24 my-auto">
                <NavTabs></NavTabs>
            </div>
        </div>
    )
}