import Doscg from './components/Doscg.vue';
import Progression from './components/Progression.vue';
import Equation from './components/Equation.vue';
import Bestway from './components/Bestway.vue';

const routes = [
    { path: '/', component: Doscg },
    { path: '/progression', component: Progression },
    { path: '/equation', component: Equation },
    { path: '/bestway', component: Bestway }
];

export default routes;
