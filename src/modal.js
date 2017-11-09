/**
  To use:

  <button data-modal="#terms">show</button>

  ...

  <div id="terms" class="modal">
    <i class="modal__close icon icon-close"></i>
    <div class="modal__content">
      <p>lorem ipsom...</p>
    </div>
  </div>


  Or programmatically:

  Modal.show('#image-error');
  Modal.hide()

 *
 */

let active;
let options = {
  // classes
  clip: 'is-modal',  // is modal? has modal?
  active: 'active',

  // selectors
  content: '.modal__content',
  close: '.modal__close',
  triggers: '[data-modal]',
  modals: '.modal'
};

/**
 * Initialize the component, cache trigger and modal elements.
 * @param {Object} opts  User-specified options.
 * @returns {void}
 */
function init(opts = {}) {
  options = Object.assign(options, opts);

  const triggers = document.querySelectorAll(options.triggers);
  const modals = document.querySelectorAll(options.modals);

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
  hide();  // do not allow modals to stack (?)
  active = document.querySelector(target);
  if (active) {
    active.classList.add(options.active);
    document.body.classList.add(options.clip);
  }
}

/**
 * Hide the currently-active modal.
 * @returns {void}
 */
function hide() {
  if (active) {
    active.classList.remove(options.active);
    active = false;
  }

  document.body.classList.remove(options.clip);
}

/**
 * Bind a modal's actions.
 * @param {HTMLElement} modal  The HTMLElement of the modal.
 * @returns {void}
 */
function bindModal(modal) {
  const content = modal.querySelector(options.content);
  const close = modal.querySelector(options.close);

  window.console.log(content);

  modal.addEventListener('click', hide);
  close && close.addEventListener('click', hide);
  content && content.addEventListener('click', (e) => {
    window.console.log('afsd');
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
    // e.stopPropagation();
    show(targetID);
  });
}

export default {
  init: init,
  show: show,
  hide: hide,
  bind: bindModal
};
