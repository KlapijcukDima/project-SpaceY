(()=>{const e={openModalBtn:document.querySelector("[data-mobile-open]"),closeModalBtn:document.querySelector("[data-mobile-close]"),modal:document.querySelector("[data-mobile]")};function t(){e.modal.classList.toggle("faded")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtns:document.querySelectorAll("[data-modal-close]"),sendModalBtn:document.querySelector('[data-action="send"'),modal:document.querySelector("[data-modal]"),modalForm:document.querySelector(".modal-wrapper"),gratitudePopup:document.querySelector(".modal-gratitude"),spinnerEl:document.querySelector(".spinner")};function t(t){t.preventDefault(),"send"===t.target.dataset.action?(e.spinnerEl.classList.remove("visually-hidden"),e.modalForm.classList.add("visually-hidden"),setTimeout((()=>{e.gratitudePopup.classList.remove("visually-hidden"),e.spinnerEl.classList.add("visually-hidden")}),3e3)):(e.modal.classList.toggle("is-hidden"),setTimeout((()=>{e.modalForm.classList.remove("visually-hidden"),e.gratitudePopup.classList.add("visually-hidden")}),500))}e.openModalBtns.forEach((e=>{e.addEventListener("click",t)})),e.closeModalBtns.forEach((e=>{e.addEventListener("click",t)})),e.sendModalBtn.addEventListener("click",t);let d=document.querySelectorAll(".contact-form-field"),o=document.querySelector(".modal-btn");d=Array.from(d),d.forEach((e=>{e.addEventListener("keyup",(()=>{o.disabled=!d.every((e=>e.value))}))}));
//# sourceMappingURL=index.3e8ed479.js.map
