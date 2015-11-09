
	/**
		To use;
		<button data-modal="#terms">show</button>
		...
		<div id="terms" class="modal">
			<i class="icon icon-close"></i>
			<div class="error content">
				<p>lorem ipsom...</p>
			</div>
		</div>

		Or programmatically:

		HP.Global.modal.show('#image-error');
		HP.Global.modal.hide()

	 *
	 */
	modal: (function() {
		var triggers = document.querySelectorAll('[data-modal]');
		var modals = document.querySelectorAll('.modal');
		var active;

		Array.prototype.forEach.call(triggers, bindTrigger);
		Array.prototype.forEach.call(modals, bindModal);

		document.body.addEventListener('keyup', function(e) { if (e.keyCode === 27) { hide(); }});

		function show(target) {
			active = document.querySelector(target);
			active.classList.add('active');
			document.body.classList.add('is-modal');	// is modal? has modal?	For overflowing on the body ...
		}

		function hide(e) {
			if(active) { active.classList.remove('active'); }
			document.body.classList.remove('is-modal');
		}

		function bindModal(modal){
			var content = modal.querySelector('.content');
			var close = modal.querySelector('.close');

			modal.addEventListener('click', hide);
			close.addEventListener('click', hide);
			content.addEventListener('click', function(e){
				e.stopPropagation();
			});
		}

		function bindTrigger(trigger){
			var targetID = trigger.getAttribute('data-modal');
			trigger.addEventListener('click', function(e) {
				e.preventDefault();
				show(targetID);
			});
		}

		return {
			show: show,
			hide: hide,
			bind: bindModal
		};
	})(),
