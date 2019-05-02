import Home from './components/RouteLessons/Home.vue';
import User from './components/RouteLessons/user/User.vue';
import UserStart from './components/RouteLessons/user/UserStart.vue';
import UserDetail from './components/RouteLessons/user/UserDetail.vue';
import UserEdit from './components/RouteLessons/user/UserEdit.vue';

export const routes = [
    { path: '', component: Home, name: 'home' },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, props: true },
        { path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' }
    ] }
];