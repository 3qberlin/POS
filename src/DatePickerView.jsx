import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { zhHK } from "@mui/x-date-pickers/locales";
import 'dayjs/locale/zh-hk';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import './css/Date.css';

dayjs.locale('zh-hk');

const theme = createTheme({
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#3D3D3D',
                    '&.Mui-focused': {
                        color: '#EF6F25',
                        outline: 'none'
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#EF6F25', // 替換為你的品牌色號 (brand-400)
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#EF6F25', // 聚焦時的顏色
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    '& .MuiButtonBase-root:nth-of-type(1)': {
                        color: '#6D6D6D',
                        border: '1px solid #888888'
                    },
                    '& .MuiButtonBase-root:nth-of-type(2)': {
                        color: '#EF6F25',
                        border: '1px solid #EF6F25'
                    },
                },
            },
        },
    }
});

export default function DateComponent() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [dayOfWeek, setDayOfWeek] = useState('');

    const today = dayjs().startOf('day');

    const disabledDates = [
        dayjs('2024-09-05'),
        dayjs('2024-09-10'),
        dayjs('2024-09-30')
    ];

    const shouldDisableDate = (date) => {
        return date.isBefore(today, 'day') ||
            disabledDates.some(disabledDate => date.isSame(disabledDate, 'day'));
    };

    const getDayOfWeek = (date) => {
        return date.format('dddd');
    };

    useEffect(() => {
        setDayOfWeek(getDayOfWeek(selectedDate));
    }, [selectedDate]);

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="zh-hk"
                localeText={
                    zhHK.components.MuiLocalizationProvider.defaultProps.localeText
                }
            >
                <div className='flex flex-wrap w-full'>
                    <div className='flex gap-12 w-full mb-8'>
                        <p>用餐日期</p>
                        {dayOfWeek}
                    </div>
                    <DatePicker className='bg-neutral-50 rounded-12 w-full hover:border-brand-400'
                        value={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                        }}
                        shouldDisableDate={shouldDisableDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

