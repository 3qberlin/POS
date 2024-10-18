import Swal from 'sweetalert2';
import './css/Alert2.css';

export default function Logout() {
    const showAlert = () => {
        Swal.fire({
            title: '確定登出？',
            confirmButtonText: '確定',
            showCancelButton: true,
            cancelButtonText: '取消',
            reverseButtons: true,
            buttonsStyling: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('已登出', '', 'success');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('取消', '', 'info');
            }
        });
    };

    return (
        <div>
            <span
                className="material-symbols-outlined ml-12"
                onClick={showAlert}
            >
                logout
            </span>
        </div>
    );
}
