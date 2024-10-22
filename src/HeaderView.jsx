import Logout from "./LogoutView"

export default function Header() {
    return (
        < div className="bg-neutral-100 w-full h-80">
            <div className="container mx-auto flex items-center relative h-full px-16 lg:px-0">
                <h1 className="absolute left-n">美好食光 | 訂位系統</h1>
                <div className="flex items-center">
                    <a href="#" className="flex items-center">
                        <img src="/POS/icons/Logo.png" alt="Logo" width={32} height={32} className="hidden lg:flex" />
                        <span className="text-24 ml-12 hidden lg:flex">美好食光 | 訂位系統</span>
                    </a>
                    <a href="#" className="flex items-center">
                        <img src="/icons/Logo.png" alt="Logo" width={24} height={24} className="flex lg:hidden" />
                        <span className="text-20 ml-8 flex lg:hidden">美好食光</span>
                    </a>

                </div>
                <a href="#" className="flex items-center ms-auto">

                    <button type="button" className="btn-brand flex"><img src="/icons/Person_White.png" alt="member" width={20} height={24} className="me-8" />會員</button>
                </a>
                <a href="#" className="flex items-center">
                    <Logout></Logout>
                </a>
            </div>
        </div >
    )
}

