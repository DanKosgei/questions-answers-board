import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('ask');
  this.route('category');
  this.route('question');
  this.route('education');
  this.route('banking');
  this.route('living');
  this.route('edit');
  this.route('rental');
});

export default Router;
