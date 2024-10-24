import { useState } from "react";
import { basePath } from "./basePathView";
import Notification2 from "./Notification2View";
import Birthday from './BirthdayView';

export default function NavTabs() {
  const [activeTab, setActiveTab] = useState("login");
  const [eyeIconLogin, setEyeIconLogin] = useState(true);
  const [eyeIconRegister, setEyeIconRegister] = useState(true);
  const [eyeIconRegisterConfirm, setEyeIconRegisterConfirm] = useState(true);
  const [isNotification2Open, setIsNotification2Open] = useState(false);

  return (
    <>
      <ul
        className="flex flex-wrap justify-center text-center items-center w-full "
        role="tablist"
      >
        <li className="me-8">
          <button
            type="button"
            role="tab"
            aria-controls="login"
            aria-selected={activeTab === "login"}
            onClick={() => setActiveTab("login")}
            className={`inline-block p-8 text-20 ${activeTab === "login" ? "border-b-2 border-brand-300" : ""
              } hover:bg-neutral-50`}
          >
            登入
          </button>
        </li>
        <li className="ml-8">
          <button
            type="button"
            role="tab"
            aria-controls="register"
            aria-selected={activeTab === "register"}
            onClick={() => setActiveTab("register")}
            className={`inline-block p-8 text-20 ${activeTab === "register" ? "border-b-2 border-brand-300" : ""
              } hover:bg-neutral-50`}
          >
            註冊
          </button>
        </li>
      </ul>
      <div>
        {activeTab === "login" && (
          <>
            <div className="flex justify-center">
              <ul className="basis-full lg:basis-5/12 px-16 lg:px-0 flex flex-col gap-16 mt-20">
                <li>
                  <div className="flex justify-between">
                    <label htmlFor="loginAccount">帳號</label>
                    <a href="#" className="text-neutral-400 border-b-2 hover:text-neutral-800 text-14 my-auto pb-2">忘記帳號？</a>
                  </div>
                  <input type="number" id="loginAccount" placeholder="輸入 10 碼行動電話" className="py-8 px-8 block w-full bg-neutral-50 hover:border-brand-400 rounded-8 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 mt-8" />
                </li>
                <li>
                  <div className="flex justify-between">
                    <label htmlFor="loginPassword">密碼</label>
                    <a href="#" className="text-neutral-400 border-b-2 hover:text-neutral-800 text-14 my-auto pb-2">忘記密碼？</a>
                  </div>
                  <div className="flex relative">

                    <input type={eyeIconLogin ? 'password' : 'text'} id="loginPassword" placeholder="輸入密碼" className="py-8 px-8 block w-full bg-neutral-50 hover:border-brand-400 rounded-8 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 mt-8" />
                    <button
                      type="button"
                      onClick={() => setEyeIconLogin(prevState => !prevState)}
                    >
                      <img
                        src={`${basePath}/icons/${eyeIconLogin ? 'Eye-Close.png' : 'Eye.png'}`}
                        alt="Eye Icon"
                        width={24}
                        height={24}
                        className="absolute right-12 inset-y-20"
                      />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center px-16 lg:px-0 mb-32">
              <button type="button" className="btn-brand mt-24  basis-full lg:basis-5/12">送出</button>
            </div>
          </>
        )}
        {activeTab === "register" && (
          <>
            <div className="flex justify-center">
              <ul className="basis-full lg:basis-5/12 px-16 lg:px-0 flex flex-col gap-16 mt-20">
                <li>
                  <label htmlFor="registerAccount">帳號</label>
                  <input type="number" id="registerAccount" placeholder="輸入 10 碼行動電話" className="py-8 px-8 block w-full bg-neutral-50 hover:border-brand-400 rounded-8 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 mt-8" />
                </li>
                <li>
                  <label htmlFor="registerEmail">Email</label>
                  <input type="email" id="registerEmail" placeholder="輸入 Email" className="py-8 px-8 block w-full bg-neutral-50 hover:border-brand-400 rounded-8 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 mt-8" />
                </li>
                <li>
                  <label htmlFor="registerAlias">暱稱</label>
                  <input type="text" id="registerAlias" placeholder="輸入暱稱" className="py-8 px-8 block w-full bg-neutral-50 hover:border-brand-400 rounded-8 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 mt-8" />
                </li>
                <li>
                  <Birthday></Birthday>
                </li>
                <li>
                  <p>性別</p>
                  <div className="flex justify-between items-center mt-8">
                    <div>
                      <label htmlFor="registerFemale">女性</label>
                      <input type="radio" name="registerRadioGender" id="registerFemale" className="ml-8" />
                    </div>
                    <div>
                      <label htmlFor="registerMale">男性</label>
                      <input type="radio" name="registerRadioGender" id="registerMale" className="ml-8" />
                    </div>
                    <div>
                      <label htmlFor="registerNone">不願告知</label>
                      <input type="radio" name="registerRadioGender" id="registerNone" className="ml-8" />
                    </div>
                  </div>
                </li>
                <li>
                  <label htmlFor="registerPassword">密碼</label>
                  <div className="flex relative">
                    <input type={eyeIconRegister ? 'password' : 'text'} id="registerPassword" placeholder="輸入密碼" className="py-8 px-8 block w-full bg-neutral-50 hover:border-brand-400 rounded-8 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 mt-8" />
                    <button
                      type="button"
                      onClick={() => setEyeIconRegister(prevState => !prevState)}
                    >
                      <img
                        src={`${basePath}/icons/${eyeIconRegister ? 'Eye-Close.png' : 'Eye.png'}`}
                        alt="Eye Icon"
                        width={24}
                        height={24}
                        className="absolute right-12 inset-y-20"
                      />
                    </button>
                  </div>
                </li>
                <li>
                  <label htmlFor="registerPasswordConfirm">確認密碼</label>
                  <div className="flex relative">
                    <input type={eyeIconRegisterConfirm ? 'password' : 'text'} id="registerPasswordConfirm" placeholder="輸入密碼" className="py-8 px-8 block w-full bg-neutral-50 hover:border-brand-400 rounded-8 border-1 focus:outline-none border border-1 border-neutral-200 focus:ring-brand-500 focus:ring-1 mt-8" />
                    <button
                      type="button"
                      onClick={() => setEyeIconRegisterConfirm(prevState => !prevState)}
                    >
                      <img
                        src={`${basePath}/icons/${eyeIconRegisterConfirm ? 'Eye-Close.png' : 'Eye.png'}`}
                        alt="Eye Icon"
                        width={24}
                        height={24}
                        className="absolute right-12 inset-y-20"
                      />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center flex-wrap px-16 lg:px-0 mb-32">
              <button type="button" className="btn-brand mt-24 basis-full lg:basis-5/12">送出</button>
              <p className='text-brand-500 basis-full text-end lg:text-center mt-20 leading-medium'>
                送出訂位，代表同意 <a href='#' className='text-brand-700 text-nowrap' onClick={() => setIsNotification2Open(true)}>個人資料蒐集使用</a> 條款
              </p>
              <Notification2 open={isNotification2Open} setOpen={setIsNotification2Open} />
            </div>

          </>
        )}
      </div>
    </>
  );
}
