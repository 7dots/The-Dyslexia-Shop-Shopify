let announcementPopupWrappers = document.querySelectorAll('.announcement-popup_wrapper');

const delay = ms => new Promise(res => setTimeout(res, ms));

window.onload = async (event) => {
    await delay(500);
    announcementPopupWrappers.forEach(e => {
        e.classList.add('-loaded');
    })
  };