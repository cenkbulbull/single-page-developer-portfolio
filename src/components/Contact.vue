<template>
	<div id="contact">
		<div>
			<h2>Contact</h2>
			<p>I would love to hear about your project anad how I could help.Please fill in the form, and I'll get back to you as soon as possible.</p>
			<p>I would love to hear about your project anad how I could help.Please fill in the form, and I'll get back to you as soon as possible.</p>
		</div>
		<div class="custom-shape-divider-bottom-1670594967">
			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
			</svg>
		</div>
		<div class="form">
			<form action="">
				<input type="text" placeholder="NAME">
				<input type="email" placeholder="EMAIL">
				<textarea rows="4" maxlength="255" placeholder="MESSAGE" ></textarea>
				<button class="btn mt-4">SEND MESSAGE</button>
			</form>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
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
	#contact{
		display: flex;
	}
	#contact div:first-child{
		width: 45%;
		padding:20px 80px;
	}
	#contact div:first-child h2{
		font-size: 58px;
		color: #ffffff;
	}
	#contact div:first-child p{
		margin-top: 25px;
		letter-spacing: .6px;
	}
	#contact .form{
		width: 45%;
		margin-left: 30px;
	}
	#contact .form form{
		display: flex;
		flex-direction: column;
	}
	#contact .form form input{
		background-color: transparent;
		border: 0;
		border-bottom: 1px solid #fff;
		padding: 20px;
		color: #ffffff;
	}
	#contact .form form textarea{
		resize: none;
		background-color: transparent;
		border: 0;
		border-bottom: 1px solid #fff;
		padding: 20px;
		color: #ffffff;
	}
	#contact .form form .btn{
		width: 200px;
		margin:0 auto;
		border-bottom: 1px solid #5e9f84;
		color: #989898;
		font-weight: 600;
		letter-spacing: 1px;
		outline: none;
	}
	#contact .form form .btn:hover{
		transition: .5s;
		color: #ffffff;

	}
</style>