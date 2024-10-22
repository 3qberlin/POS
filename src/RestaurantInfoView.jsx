export default function RestaurantInfo() {
    return (
        <div className="container mx-auto lg:px-0 flex flex-wrap lg:flex-nowrap gap-16 lg:mt-60 lg:gap-24">
            <div className="basis-12/12 lg:basis-3/12">
                <img src="/restaurant/Restaurant-Pofile-Image.png" alt="restaurantInfo" className="lg:rounded-12" />
            </div>
            <div className="basis-12/12 lg:basis-9/12 px-16 md:px-0">
                <ul className="flex gap-20 flex-wrap">
                    <li className="flex gap-12 items-center w-full">
                        <img src="/icons/Restaurant.png" alt="Restaurant" width={24} height={24} className="max-h-24" />
                        <p className="text-20">餐廳名稱</p>
                        <span className="btn-success">營業中</span>
                    </li>
                    <li className="flex gap-12 items-center w-full">
                        <img src="/icons/Time.png" alt="Time" width={24} height={24} />
                        <p>營業時段：</p>
                        <span>AM 11：25</span>
                        <span>PM 10：30</span>
                    </li>
                    <li className="flex gap-12 items-center w-full">
                        <img src="/icons/Location.png" alt="Location" width={24} height={24} />
                        <p>台北市地球村</p>
                    </li>
                    <li className="flex gap-12 items-center w-full">
                        <img src="/icons/Phone.png" alt="Phone" width={24} height={24} />
                        <a href="tel:02-3333-1111">02-3333-1111</a>
                    </li>
                    <li className="flex gap-12 items-center w-full">
                        <img src="/icons/Food-bank.png" alt="Food-bank" width={24} height={24} />
                        <p>葷素皆有</p>
                    </li>
                    <li className="flex gap-12 items-center w-full">
                        <img src="/icons/Price.png" alt="Price" width={24} height={24} />
                        <p>350 元/人</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}