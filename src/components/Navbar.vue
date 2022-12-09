<template>
	<div id="nav" class="mt-2">
		<span @click="$router.push('/')">johnseaese</span>
		<ul>
			<li>
				<a href="#"><i class="fa-brands fa-github"></i></a>
			</li>
			<li>
				<a href="#"><i class="fa-brands fa-linkedin"></i></a>
			</li>
			<li>
				<a href="#"><i class="fa-brands fa-twitter"></i></a>
			</li>
			<li>
				<a href="#"><i class="fa-brands fa-instagram"></i></a>
			</li>
			<!-- dark or light 
			<li>
				<a href="#"><i class="fa-solid fa-moon"></i></a>
			</li>-->
		</ul>
	</div>
</template>
<script>
	
</script>
<style scoped>
	#nav{
		display: flex;
		justify-content: space-between;
		padding:20px 80px;
		font-size: 18px;
		color: #ffffff;
	}
	#nav span{
		cursor: pointer;
	}
	#nav ul{
		display: flex;
	}
	#nav ul li{
		margin-right: 20px;
	}
	#nav ul li a{
		color: #ffffff;
	}
	

</style>