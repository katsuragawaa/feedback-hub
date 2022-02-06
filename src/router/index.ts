import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/home/Home.vue';
import Roadmap from '@/pages/roadmap/Roadmap.vue';
import Feedback from '@/pages/feedback/Feedback.vue';
import NewFeedbackForm from '@/pages/feedback/NewFeedbackForm.vue';
import FeedbackDetails from '@/pages/feedback/FeedbackDetails.vue';

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
      {
        path: 'details/:id',
        name: 'FeedbackDetails',
        component: FeedbackDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
