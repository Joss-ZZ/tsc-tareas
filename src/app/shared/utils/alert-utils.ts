import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

export class AlertUtils {

  static showToast(icon: SweetAlertIcon, title: string, message: string) {
    const toastOptions: SweetAlertOptions = {
      title,
      text: message,
      icon: icon,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    };

    const toast = Swal.mixin({
      toast: true,
      timerProgressBar: true,
    });

    toast.fire(toastOptions);
  }

  static showLoading(title: string, text: string) {
    Swal.fire({
        title,
        html: text,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
    });
  }

  static closeLoading() {
    Swal.close();
  }
}