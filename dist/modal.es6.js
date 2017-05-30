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

var active;
var options = {
  clip: 'is-modal',  // is modal? has modal?
  active: 'active',
  content: 'modal--content',
  close: 'modal--close',
  triggers: '[data-modal]',
  modals: '.modal'
};

/**
 * Initialize the component, cache trigger and modal elements.
 * @param {Object} opts  User-specified options.
 * @returns {void}
 */
function init(opts) {
  if ( opts === void 0 ) opts = {};

  options = Object.assign(options, opts);

  var triggers = document.querySelectorAll(options.triggers);
  var modals = document.querySelectorAll(options.modals);

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
  active.classList.add(options.active);
  document.body.classList.add(options.clip);
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
  var content = modal.querySelector(options.content);
  var close = modal.querySelector(options.close);

  modal.addEventListener('click', hide);
  close && close.addEventListener('click', hide);
  content && content.addEventListener('click', function (e) {
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

var modal = {
  init: init,
  show: show,
  hide: hide,
  bind: bindModal
};

export default modal;