<template>
	<div id="project">
		<div class="mb-4">
			<h2>Projects</h2>
		</div>
		<div class="row">
			<div v-for="(project,index) in projects" :key="index" class="col-md-12 col-lg-6">
				<img :src="'src/assets/images/'+project.src" alt="">
				<h3>{{project.name}}</h3>
				<span>{{project.language}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				projects:[
					{name:"DESIGN PORTFOLIO",language:"HTML CSS", src:"p1.png"},
					{name:"E-LEARNING LANDING PAGE",language:"HTML CSS", src:"p2.jpg"},
					{name:"TO DO WEB APP",language:"HTML CSS JAVASCRIPT", src:"p2.jpg"},
					{name:"ENTERTAINMENT WEB APP",language:"HTML CSS JAVASCRIPT", src:"p3.jpg"},
					{name:"MEMORY GAME",language:"VUE", src:"p1.png"},
					{name:"ART GALLERY SHOWCASE",language:"HTML CSS JAVASCRIPT", src:"p2.jpg"},
					{name:"ART GALLERY SHOWCASE",language:"HTML CSS JAVASCRIPT", src:"p2.jpg"},
					{name:"MEMORY GAME",language:"HTML CSS", src:"p3.jpg"},
				]
			}
		}
	}
</script>
<style>
	#project{
		padding:10px 80px;
	}
	#project div h2{
		color: #ffffff;
	}
	#project .row{
		height:70vh;
		overflow: scroll;
	}
	::-webkit-scrollbar {
        display: none;
        visibility: hidden;
        opacity: 0
}
	#project .row span{
		font-size: 13px;
	}
	#project .row img{
		width: 97%;
		height: 315px;
		margin-top:20px;
		margin-bottom:20px;
	}
</style>