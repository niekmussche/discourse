import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: [':header-dropdown-toggle', 'active'],

  @computed('showUser')
  href(showUser) {
    return showUser ? this.currentUser.get('path') : '';
  },

  active: Ember.computed.alias('toggleVisible'),

  actions: {
    toggle() {
      if (this.siteSettings.login_required && !this.currentUser) {
        this.sendAction('loginAction');
      } else {
        this.toggleProperty('toggleVisible');
      }
      this.appEvents.trigger('dropdowns:closeAll');
    }
  }
});
