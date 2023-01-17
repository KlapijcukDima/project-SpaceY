var fields=document.querySelectorAll(".contact-form-field"),submitButton=document.querySelector(".modal-btn");(fields=Array.from(fields)).forEach((function(e){e.addEventListener("keyup",(function(){submitButton.disabled=!fields.every((function(e){return e.value}))}))}));
//# sourceMappingURL=index.284ade97.js.map
