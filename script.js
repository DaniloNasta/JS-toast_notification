/* bootstrap-toast */
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}
/* bootstrap-toast */


/* custom-toast */
const customToastTrigger = document.getElementById('customToastBtn')
const customToast = document.getElementById('customToast');
if (customToastTrigger) {
    customToastTrigger.addEventListener('click', () => {
        customToast.classList.add("customToast-show")

        /* after 5 seconds remove class */
        setTimeout(()=>{
            customToast.classList.remove("customToast-show");
        }, 5000);
    })
}
/* custom-toast */