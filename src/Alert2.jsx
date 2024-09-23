import { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';

export default function Alert2(){
    const [swalProps, setSwalProps] = useState({});
    return (
        <div>
            <button onClick={() => {
                setSwalProps({
                    show: true,
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    iconColor: 'blue',
                    confirmButtonText: 'Cool',
                    willClose: () => setSwalProps({}) 
                });
            }}>
                Open
            </button>

            <SweetAlert2 {...swalProps} />
        </div>
    );
}