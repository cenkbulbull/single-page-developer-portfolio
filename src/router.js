import Vue from "vue"
import VueRouter from "vue-router"

import Talents from "./components/Talents"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Project from "./components/Project"

Vue.use(VueRouter)

export const router = new VueRouter({
	routes :[
		{path:"/", component:Home},
		{path:"/talents", component:Talents},
		{path:"/contact", component:Contact},
		{path:"/project", component:Project},
		{path:"*", redirect:"/"},
	],
	mode:"history"

})