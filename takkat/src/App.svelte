<script>
	import { defaultEvmStores, selectedAccount } from 'svelte-web3';
	export let password = document.getElementById('password');
	defaultEvmStores.setProvider();
</script>

<main>
	<div id="header">
		<b><h1>Welcome to the decentralized Social Media!</h1></b>
	</div><br>
	<div id="sign">
  		<label for="username">Username:</label>
		<input type="text" id="username" name="username" ><br><br>
		<label for="password">Password:</label>
		<input type="password" id="password" name="password" ><br><br>
		<button onclick="signup()">Sign Up</button><br>
	</div>
	
</main>

<style>
	#header{
		border: 10px solid black;
  		margin-top: 100px;
  		margin-bottom: 100px;
  		margin-right: 150px;
  		margin-left: 80px;
		text-align: center;
	}
	#sign{
		text-align: center;	
	}
	#sign > label{
		text-align: center;	
		cursor: pointer;
		font-size: 2rem;	
	}
	#sign > button{
		text-align: center;	
		cursor: pointer;
		font-size: 2rem;
	}
</style>