'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Modal1() {
    const [open, setOpen] = useState(true)

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-brand-500" />
                                </div>
                                <div className="mt-3  sm:ml-4 sm:mt-0 text-left">
                                    <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900 text-center sm:text-start">
                                        訂位需知
                                    </DialogTitle>
                                    <ul className="mt-2">

                                        <li className="text-sm text-gray-500">
                                            <span className='text-base'>人數安排</span>
                                            <p className='text-sm'>用餐當日到店人數逾訂位時數量，將可能採取非同桌或僅待接訂位數量人數入座</p>
                                        </li>
                                        <li className="text-sm text-gray-500 mt-3">
                                            <span className='text-base'>座位安排</span>
                                            <p className='text-sm'>依店家安排，僅保留 10 分鐘</p>
                                        </li>
                                        <li className="text-sm text-gray-500 mt-3">
                                            <span className='text-base'>付款條件</span>
                                            <p className='text-sm'>現金、信用卡（不含 AE 卡）與行動支付</p>
                                        </li>
                                        <li className="text-sm text-gray-500 mt-3">
                                            <span className='text-base'>備註需求</span>
                                            <p className='text-sm'>店家依現場設施與人力情況，協助完成備註需求</p>
                                        </li>
                                        <li className="text-sm text-gray-500 mt-3">
                                            店家擁有座位使用解釋權
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
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
