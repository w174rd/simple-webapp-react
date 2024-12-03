import Swal from 'sweetalert2';

export const ToastNotification = (icon, message) => {
    return Swal.fire({
        toast: true,
        position: 'top-end',
        icon: icon || 'info',
        title: message,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
}