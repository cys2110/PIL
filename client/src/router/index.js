import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TreatiesView from '@/views/Treaties/TreatiesView.vue'
import TreatyView from '@/views/Treaties/TreatyView.vue'
import CourtView from '@/views/CourtView.vue'
import CaseView from '@/views/CaseView.vue'
import DocumentView from '@/views/DocumentView.vue'
import KeywordView from '@/views/KeywordView.vue'
import SubjectView from '@/views/SubjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/treaties',
      name: 'Treaties',
      component: TreatiesView,
      children: [
        {
          path: ':treaty',
          name: 'Treaty',
          component: TreatyView,
          props: true
        }
      ]
    },
    {
      path: '/courts/:court',
      name: 'Court',
      component: CourtView,
      props: true,
      children: [
        {
          path: ':case',
          name: 'Case',
          component: CaseView,
          props: true,
          children: [
            {
              path: ':document',
              name: 'Document',
              component: DocumentView,
              props: true
            }
          ]
        }
      ]
    },
    {
      path: '/keywords/:keyword',
      name: 'Keyword',
      component: KeywordView,
      props: true
    },
    {
      path: '/subjects/:subject',
      name: 'Subject',
      component: SubjectView,
      props: true
    }
  ]
})

export default router
