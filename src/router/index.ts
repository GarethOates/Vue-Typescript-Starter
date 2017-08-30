import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Goates from '@/components/Goates.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/goates/:gareth',
            name: 'Goates',
            component: Goates,
            props: true
        }
    ]
});
