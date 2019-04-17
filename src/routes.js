import Vreme from './components/Vreme.vue'
import PopuniFormu from './components/PopuniFormu.vue'
import Blog from './components/Blog.vue'
import AddBlog from './components/AddBlog.vue'
import ContactUs from './components/ContactUs.vue'
import SingleBlog from './components/SingleBlog.vue'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


export default new Router({
    routes: [
        { path: '/', name:'Vreme',component: Vreme },
        { path: '/forma', name:'PopuniFormu', component: PopuniFormu },
        { path: '/blog', name:'Blog',component: Blog },
        { path: '/blog/:id', name:'SingleBlog',component: SingleBlog },
        { path: '/addblog',name:'AddBlog', component: AddBlog },
        { path: '/contact', name:'ContactUs',component: ContactUs },
        

    ],
    mode:'history'
    // a moze i mode:'hash' 
})
