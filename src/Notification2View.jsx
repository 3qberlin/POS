'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

// eslint-disable-next-line react/prop-types
export default function Notification2({ open, setOpen }) {

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-16 lg:p-24 text-center sm:items-center">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-8 bg-neutral-0 text-left shadow-xl transition-all data-[closed]:translate-y-24 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-20 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-neutral-0 p-24 sm:p-24 sm:pb-12">
                            <div className="sm:flex sm:items-start">
                                <div className="flex flex-shrink-0 items-center justify-center">
                                    <img src="src/assets/icons/Warning.png" alt="Warning" width={40} height={40} />
                                </div>
                                <div className="mt-12 sm:ml-12 sm:mt-0 text-left">
                                    <DialogTitle as="h3" className="text-24 font-semibold text-neutral-900 h-40 flex justify-center sm:justify-start items-center">
                                        個人資料保護告知事項
                                    </DialogTitle>
                                    <p className='leading-smallMedium'>
                                        感謝您使用我們的餐廳訂位服務。在您進行訂位並提供個人資料之前，請您仔細閱讀以下告知事項。這些內容旨在告知您我們如何蒐集、處理、使用及保護您的個人資料，並說明您在個人資料保護法下的相關權利。
                                    </p>
                                    <ol className="mt-12 list-decimal pl-16 leading-smallMedium">

                                        <li className=" text-neutral-800">
                                            <span className='text-18'>蒐集個人資料的目的</span>
                                            <p>訂位確認與聯繫：管理您的訂位需求，向您發送訂位確認及提醒。
                                                提供後續服務：根據您的需求提供後續服務或客戶支持。
                                                行銷與促銷活動：將向您發送與本餐廳相關的最新資訊、優惠或活動通知。</p>
                                        </li>
                                        <li className=" text-neutral-800 mt-16">
                                            <span className='text-18'>蒐集的個人資料類別</span>
                                            <p>為完成訂位及提供相關服務，我們將蒐集以下個人資料：
                                                基本資料：姓名、聯絡電話、電子郵件、性別及匿稱。</p>
                                        </li>
                                        <li className=" text-neutral-800 mt-16">
                                            <span className='text-18'>個人資料的使用對象、範圍與方式</span>
                                            <p>您的個人資料僅會由本餐廳及本餐廳的授權人員處理，除非法律另有規定，否則不會向第三方揭露您的資料。蒐集的個人資料將僅用於內部管理及提供服務，不會用於其他目的。</p>
                                        </li>
                                        <li className=" text-neutral-800 mt-16">
                                            <span className='text-18'>個人資料的保存期限</span>
                                            <p>您的個人資料將依《個人資料保護法》之最長期限保存，用於提供後續服務或優惠通知。</p>
                                        </li>
                                        <li className=" text-neutral-800 mt-16">
                                            <span className='text-18'>您的權利</span>
                                            <p>根據《個人資料保護法》，您對於提供的個人資料擁有以下權利：
                                                查詢或請求閱覽您的個人資料。
                                                請求製給複製本。
                                                請求補充或更正您的個人資料。
                                                請求停止蒐集、處理或利用您的個人資料。
                                                請求刪除您的個人資料。
                                                如需行使上述權利，請聯繫我們的客服人員 <a href="#" className='tel:02-2222-3456 text-brand-500'>02-2222-3456</a>，我們將在收到您的請求後合理時間內處理。</p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-50 px-12 py-12 sm:flex sm:flex-row-reverse sm:px-12">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center text-16 rounded-8 bg-brand-500 px-16 py-8  text-neutral-0 shadow-sm hover:bg-nagitave sm:w-auto"
                            >
                                我已瞭解
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
