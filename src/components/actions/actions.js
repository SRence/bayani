import Actions from './actions-class';
import ModalMethods from '../../utils/modal-methods';

export default {
  name: 'actions',
  params: {
    actions: {
      convertToPopover: true,
      closeByBackdropClick: true,
      render: null,
      renderPopover: null,
    },
  },
  static: {
    Actions,
  },
  create() {
    const app = this;
    app.actions = ModalMethods({
      app,
      constructor: Actions,
      defaultSelector: '.actions-modal.modal-in',
    });
  },
  clicks: {
    '.actions-open': function openActions($clickedEl, data = {}) {
      const app = this;
      app.actions.open(data.actions, data.animate);
    },
    '.actions-close': function closeActions($clickedEl, data = {}) {
      const app = this;
      app.actions.close(data.actions, data.animate);
    },
    '.actions-backdrop': function closeActions() {
      const app = this;
      if (!app.params.actions.closeByBackdropClick) return;
      app.actions.close();
    },
  },
};
