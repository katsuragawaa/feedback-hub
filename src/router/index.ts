import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Roadmap from '../views/Roadmap.vue';
import Feedback from '../views/Feedback.vue';
import NewFeedbackForm from '../views/NewFeedbackForm.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/roadmap', name: 'Roadmap', component: Roadmap },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
    redirect: '/',
    children: [
      { path: 'new', name: 'NewFeedbackForm', component: NewFeedbackForm },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
