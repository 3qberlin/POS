import { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';
import './css/Alert2.css';

export default function Alert2() {
    const [swalProps, setSwalProps] = useState({});
    return (
        <div>
            <span className="material-symbols-outlined" onClick={() => {
                setSwalProps({
                    show: true,
                    title: '確定登出？',
                    confirmButtonText: '確定',
                    showCancelButton: true,
                    cancelButtonText: '取消',
                    willClose: () => setSwalProps({}),
                    reverseButtons:true,
                    // cancelButtonColor:"gray",
                    buttonsStyling: true
                });
            }}>
                logout
            </span>
            
            <SweetAlert2 {...swalProps} />
        </div>
    );
}