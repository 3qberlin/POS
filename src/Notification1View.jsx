'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Notification1() {
    const [open, setOpen] = useState(true)

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
                                <div className="mx-auto flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-full p-8 bg-brand-100">
                                    <ExclamationTriangleIcon aria-hidden="true" className="h-40 w-40 text-brand-500" />
                                </div>
                                <div className="mt-12 sm:ml-12 sm:mt-0 text-left">
                                    <DialogTitle as="h3" className="text-24 font-semibold text-neutral-900 h-40 flex justify-center sm:justify-start items-center">
                                        訂位需知
                                    </DialogTitle>
                                    <ul className="mt-12">

                                        <li className=" text-neutral-800">
                                            <span className='text-18'>人數安排</span>
                                            <p className=''>用餐當日到店人數逾訂位時數量，將可能採取非同桌或僅待接訂位數量人數入座</p>
                                        </li>
                                        <li className=" text-neutral-800 mt-16">
                                            <span className='text-18'>座位安排</span>
                                            <p className=''>依店家安排，僅保留 10 分鐘</p>
                                        </li>
                                        <li className=" text-neutral-800 mt-16">
                                            <span className='text-18'>付款條件</span>
                                            <p className=''>現金、信用卡（不含 AE 卡）與行動支付</p>
                                        </li>
                                        <li className=" text-neutral-800 mt-16">
                                            <span className='text-18'>備註需求</span>
                                            <p className=''>店家依現場設施與人力情況，協助完成備註需求</p>
                                        </li>
                                        <li className=" text-neutral-800 text-18 mt-16">
                                            店家擁有座位使用解釋權
                                        </li>
                                    </ul>
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
