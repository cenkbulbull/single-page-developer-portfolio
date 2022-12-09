<template>
	<div id="home">
		<div class="custom-shape-divider-bottom-1670594967">
			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
			</svg>
		</div>
		<div class="intro">
			<h2>Nice to meet you!</h2>
			<h2>I'm <span>John Seaese.</span></h2>
			<p>Based in the UK,I'm a front end developer passionate about building accessible web apps that users love.</p>
			<button @click.prevent="$router.push('/contact')">CONTACT ME</button><br>
			<button @click.prevent="$router.push('/project')">PROJECTS</button><br>
			<button @click.prevent="$router.push('/talents')">SKILLS</button>
		</div>
		<div>
			<img src="../assets/images/person4.jpg" alt="">
		</div>
	</div>
</template>
<script>
	
</script>
<style>
	.custom-shape-divider-bottom-1670594967 {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
		z-index: -50;
	}

	.custom-shape-divider-bottom-1670594967 svg {
		position: relative;
		display: block;
		width: calc(195% + 1.3px);
		height: 500px;
		transform: rotateY(180deg);

	}
	.custom-shape-divider-bottom-1670594967 .shape-fill {
		fill: #1D1D1D;
	}
	#home{
		display: flex;
	}
	#home div{
		width: 60%;
		padding:20px 80px;
	}
	#home div h2{
		font-size: 58px;
		color: #ffffff;
	}
	#home .intro p{
		width: 60%;
		font-size: 13px;
		margin-top: 25px;
		letter-spacing: .6px;
	}
	#home .intro span{
		border-bottom: 3px solid #5e9f84;
	}
	#home .intro button{
		border: 0;
		background: transparent;
		border-bottom: 1px solid #5e9f84;
		outline: none;
		margin-top: 30px;
		color: #989898;
		font-weight: 600;
		letter-spacing: 1px;
	}
	#home .intro button:hover{
		transition: .5s;
		color: #ffffff;
	}
	#home div img{
		position: absolute;
		top: 0;
		right: 70px;
		width: 35%;
		z-index: -20;
		filter: grayscale(100%) ;
	}

</style>