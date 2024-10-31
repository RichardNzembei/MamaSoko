// clickOutside.js
export default {
    beforeMount(el, binding) {
      el.clickOutsideEvent = function (event) {
        // Check if the click is outside the element
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(); // Call the method passed to the directive
        }
      };
      document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.removeEventListener('click', el.clickOutsideEvent);
    },
  };
  