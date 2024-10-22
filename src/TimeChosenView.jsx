import { useState } from 'react';
import Notification1 from './Notification1View';
import Notification2 from './Notification2View';

export default function TimeChosen() {
    const [isNotification1Open, setIsNotification1Open] = useState(false);
    const [isNotification2Open, setIsNotification2Open] = useState(false);


    return (
        <>
            <div className='container mx-auto flex flex-wrap xl:flex-nowrap lg:gap-24 lg:mt-100'>
                <div className="basis-0 lg:basis-2/12"></div>
                <ul className="basis-full lg:basis-8/12 flex flex-wrap lg:flex-nowrap lg:gap-40">
                    <li className='basis-full lg:basis-1/4 flex flex-wrap'>
                        <img src="src/assets/restaurant/Restaurant-Pofile-Image.png" alt="RestaurantPic" className='lg:rounded-8 object-cover' />
                        <ul className='flex flex-col px-16 lg:px-0'>
                            <li className='flex items-center mt-20 w-full'>
                                <img src="src/assets/icons/Restaurant.png" alt="Restaurant" width={24} height={24} />
                                <p className='text-16 lg:text-20 ml-8 lg:ml-12'>美好食光</p>
                            </li>
                            <li className='flex items-center mt-20 w-full'>
                                <img src="src/assets/icons/Calendar.png" alt="Calendar" width={24} height={24} />
                                <p className='text-16 lg:text-20 ml-8 lg:ml-12'>2024-12-12</p>
                            </li>
                            <li className='flex items-center mt-20 w-full'>
                                <img src="src/assets/icons/Time.png" alt="Time" width={24} height={24} />
                                <p className='text-16 lg:text-20 ml-8 lg:ml-12'>17：30</p>
                            </li>
                            <li className='flex items-center mt-12 lg:mt-20 w-full'>
                                <img src="src/assets/icons/Person.png" alt="Time" width={24} height={24} className='text-neutral-800' />
                                <p className='text-16 lg:text-20 ml-8 lg:ml-12'>8</p>
                            </li>
                        </ul>
                    </li>
                    <li className='basis-full lg:basis-3/4 px-16 flex flex-col gap-y-20 mt-32 lg:mt-0'>
                        <div className='flex flex-wrap'>
                            <label htmlFor="orderName" className='w-full mb-8'>訂位人姓名</label>
                            <input type="text" className='rounded-8 px-12 py-8 bg-neutral-50 hover:border-brand-400 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 w-full' id='orderName' placeholder='全名' />
                        </div>
                        <div className='flex flex-wrap'>
                            <label htmlFor="orderPhone" className='w-full mb-8'>行動電話</label>
                            <input type="number" className='rounded-8 px-12 py-8 bg-neutral-50 hover:border-brand-400 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 w-full' id='orderPhone' placeholder='請輸入 10 碼行動電話' />
                        </div>
                        <div className='flex flex-wrap'>
                            <label htmlFor="orderComment" className='w-full mb-8'>備註</label>
                            <textarea name="" id="orderComment" className='rounded-8 min-h-140 px-8 py-4 bg-neutral-50 hover:border-brand-400 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 w-full' placeholder='備註內容'></textarea>
                        </div>
                    </li>

                </ul>
                <div className="basis-0 lg:basis-2/12"></div>
                {/* <Link to="/">首頁</Link> */}
            </div>
            <div className="container mx-auto flex px-16 mt-20 flex-wrap justify-center mb-40 lg:mb-280">
                <div className="basis-0 lg:basis-2/12"></div>
                <div className="basis-full lg:basis-8/12">

                    <button type="button" className='btn-brand w-full text-nowrap'>送出訂位</button></div>
                <div className="basis-0 lg:basis-2/12"></div>
                <p className='text-brand-500 basis-full lg:basis-8/12 text-end mt-20 leading-medium'>
                    送出訂位，代表同意 <a href='#' className='text-brand-700 text-nowrap' onClick={() => setIsNotification1Open(true)}>訂位須知</a> 與 <a href='#' className='text-brand-700 text-nowrap' onClick={() => setIsNotification2Open(true)}>個人資料蒐集使用</a> 條款
                </p>
                <Notification1 open={isNotification1Open} setOpen={setIsNotification1Open} />
                <Notification2 open={isNotification2Open} setOpen={setIsNotification2Open} />
            </div>
        </>
    );
}