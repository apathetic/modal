/**
  To use:

  <button data-modal="#terms">show</button>

  ...

  <div id="terms" class="modal">
    <i class="icon icon-close"></i>
    <div class="error content">
      <p>lorem ipsom...</p>
    </div>
  </div>


  Or programmatically:

  Modal.show('#image-error');
  Modal.hide()

 *
 */

let active;

/**
 * Initialize the component, cache trigger and modal elements.
 * @returns {void}
 */
function init() {
  const triggers = document.querySelectorAll('[data-modal]');
  const modals = document.querySelectorAll('.modal');

  Array.prototype.forEach.call(triggers, bindTrigger);
  Array.prototype.forEach.call(modals, bindModal);

  document.body.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) { hide(); }
  });
}

/**
 * Show the modal referenced by its selector.
 * @param {String} target  The querySelector of the modal to display.
 * @returns {void}
 */
function show(target) {
  active = document.querySelector(target);
  active.classList.add('active');
  document.body.classList.add('is-modal');  // is modal? has modal?
}

/**
 * Hide the currently-active modal.
 * @returns {void}
 */
function hide() {
  if (active) {
    active.classList.remove('active');
    active = false;
  }

  document.body.classList.remove('is-modal');
}

/**
 * Bind a modal's actions.
 * @param {HTMLElement} modal  The HTMLElement of the modal.
 * @returns {void}
 */
function bindModal(modal) {
  const content = modal.querySelector('.modal--content');
  const close = modal.querySelector('.modal--close');

  modal.addEventListener('click', hide);
  close.addEventListener('click', hide);
  content.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

/**
 * Bind a modal trigger's actions.
 * @param {HTMLElement} trigger  The HTMLElement of the modal trigger.
 * @returns {void}
 */
function bindTrigger(trigger) {
  var targetID = trigger.getAttribute('data-modal');

  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    show(targetID);
  });
}

export default {
  init: init,
  show: show,
  hide: hide,
  bind: bindModal
};
