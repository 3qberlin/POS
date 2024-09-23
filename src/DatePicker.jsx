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
                <div>
                    <DatePicker
                        value={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                        }}
                        shouldDisableDate={shouldDisableDate}
                        renderInput={(params) => <TextField {...params} />}
                    />{dayOfWeek}
                </div>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

