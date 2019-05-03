import Home from './components/RouteLessons/Home.vue';
import Header from './components/RouteLessons/Header.vue';

// Imediate loading
// import User from './components/RouteLessons/user/User.vue';
// import UserStart from './components/RouteLessons/user/UserStart.vue';
// import UserDetail from './components/RouteLessons/user/UserDetail.vue';
// import UserEdit from './components/RouteLessons/user/UserEdit.vue';

// Lazy loading
const User = resolve => {
    require.ensure(['./components/RouteLessons/user/User.vue'], () => {
        resolve(require('./components/RouteLessons/user/User.vue'));
    });
}
const UserStart = resolve => {
    require.ensure(['./components/RouteLessons/user/UserStart.vue'], () => {
        resolve(require('./components/RouteLessons/user/UserStart.vue'));
    });
}
const UserDetail = resolve => {
    require.ensure(['./components/RouteLessons/user/UserDetail.vue'], () => {
        resolve(require('./components/RouteLessons/user/UserDetail.vue'));
    });
}
const UserEdit = resolve => {
    require.ensure(['./components/RouteLessons/user/UserEdit.vue'], () => {
        resolve(require('./components/RouteLessons/user/UserEdit.vue'));
    });
}

export const routes = [
    { path: '', name: 'home', 
        components: {
            default: Home,
            'header-top': Header
      } 
    },
    { path: '/user', 
        components: {
            default: User,
            'header-bottom': Header 
        }, 
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail, props: true },
            { path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' }
        ] 
    },
    { path: '/redirectme', redirect: {name: 'home'} },
    { path: '*', redirect: '/user'}

];