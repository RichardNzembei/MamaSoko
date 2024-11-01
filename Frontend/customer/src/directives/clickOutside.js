export default {
    beforeMount(el, binding) {
      // Define the event listener
      el.clickOutsideEvent = (event) => {
        // Check if the clicked target is outside the element
        if (!(el === event.target || el.contains(event.target))) {
          // Call the method provided in the directive
          binding.value(event);
        }
      };
  
      // Add event listener
      document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      // Remove event listener when the element is unmounted
      document.removeEventListener('click', el.clickOutsideEvent);
    },
  };
  