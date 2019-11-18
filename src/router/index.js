import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
	// user
	{
		path: '/user',
		name: 'user',
		redirect: '/user/login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
		children: [
			{
				path: 'login',
				name: 'login',
				component: () => import(/* webpackChunkName: "user" */ "../views/user/Login"),
			},
			{
				path: 'register',
				name: 'register',
				component: () => import(/* webpackChunkName: "user" */ "../views/user/Register"),
			}
		]
	},

	// dashboard
	{
		path: '/dashboard',
		name: 'dashboard',
		redirect: '/dashboard/analysis',
		component: () => import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
		children: [
			{
				path: 'analysis',
				name: 'analysis',
				component: () => import(/* webpackChunkName: "dashboard" */ "../views/dashboard/Analysis"),
			}
		]
	},

	// form
	{
		path: '/form',
		name: 'form',
		redirect: '/form/basic-form',
		component: () => import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
		children: [
			{
				path: 'basic-form',
				name: 'basic-form',
				component: () => import(/* webpackChunkName: "form" */ "../views/form/BasicForm"),
			},
			{
				path: 'step-form',
				name: 'step-form',
				redirect: "/form/step-form/info",
				component: () => import(/* webpackChunkName: "form" */ "../views/form/StepForm"),
				children: [
					{
						path: 'info',
						name: 'info',
						component: () => import(/* webpackChunkName: "form" */ "../views/form/StepForm/StepOne"),
					},
					{
						path: 'confirm',
						name: 'confirm',
						component: () => import(/* webpackChunkName: "form" */ "../views/form/StepForm/StepTwo"),
					},
					{
						path: 'result',
						name: 'result',
						component: () => import(/* webpackChunkName: "form" */ "../views/form/StepForm/StepThree"),
					},
				]
			}
		]
	},

	// 404
	{
		path: '*',
		name: '404',
		component: () => import(/* webpackChunkName: "exception" */ "../views/exception/404")
	}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
