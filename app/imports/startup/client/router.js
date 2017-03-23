import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/landing-page', {
  name: 'Landing_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Landing_Page' });
  },
});

FlowRouter.route('/login-page', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});

FlowRouter.route('/user-home', {
  name: 'User_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Home_Page' });
  },
});

FlowRouter.route('/admin-home', {
  name: 'Admin_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Home_Page' });
  },
});

FlowRouter.route('/user-profile', {
  name: 'User_Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Profile_Page' });
  },
});

FlowRouter.route('/foods-available', {
  name: 'Foods_Available_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Foods_Available_Page' });
  },
});

FlowRouter.route('/todays-picks', {
  name: 'Todays_Picks_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Todays_Picks_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
