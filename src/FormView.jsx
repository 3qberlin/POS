import { useState } from 'react';

export default function RequiredFieldForm() {
    const [inputValue, setInputValue] = useState('');
    const [info, setInfo] = useState(''); // 'empty', 'invalid', 'success', or 'taken'

    // 假設這是一個行動電話號碼陣列，包含一些已經被使用的門號
    const usedPhoneNumbers = ['0912345678', '0923456789', '0934567890'];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Validate if the input is not empty
        if (!value.trim()) {
            setInfo('empty');
        } else if (value.length !== 10) {
            setInfo('invalid'); // 當輸入的號碼長度不是 10 碼
        } else if (usedPhoneNumbers.includes(value)) {
            setInfo('taken'); // 當號碼已經被使用
        } else {
            setInfo('success'); // 當號碼可用
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 提交表單邏輯 (如果需要)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-between'>
                <label htmlFor="formInput" className='block'>
                    輸入帳號
                </label>
                <div className='flex items-center'>
                    <span className="material-symbols-outlined">
                        {info === 'empty' ? 'exclamation'
                            : info === 'success' ? 'check'
                                : info === 'taken' ? 'error'
                                    : info === 'invalid' && 'warning'}
                    </span>
                    <span className='ml-1'>
                        {info === 'empty' ? '不可為空'
                            : info === 'invalid' ? '門號須為 10 碼'
                                : info === 'taken' ? '門號已被使用'
                                    : info === 'success' && '門號可使用'}
                    </span>
                </div>
            </div>
            <input
                className="border-2"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                id="formInput"
            />
            <label htmlFor="radioAa">Radio1</label>
            <input type="radio" name='radioA1' id="radioAa" className='w-16 h-16'/>

            <label htmlFor="radioAb">Radio2</label>
            <input type="radio" name='radioA1' id="radioAb" className='w-16 h-16' />

            <button type="submit" className='block'>Submit</button>
        </form>
    );
}
