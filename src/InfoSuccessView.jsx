import Swal from 'sweetalert2';

export default function InfoSuccessView() {
    const handleClick = () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "訂位成功",
            showConfirmButton: false,
            timer: 1800,
            willClose: () =>
                setTimeout(() => {
                }, 1200),
            text: "訂位簡訊已發送",
        });
    };

    return (
        <div>
            <span
                className="material-symbols-outlined"
                onClick={handleClick}
            >
                box
            </span>
        </div>
    );
}
