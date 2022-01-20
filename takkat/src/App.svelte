<script>
	import { defaultEvmStores, selectedAccount } from 'svelte-web3';
	import {createHash} from 'crypto';

	let is_error = false;
	let username;
	let password;

	function hash(input){
		return createHash('sha256').update(password).digest('hex');
	}
i
	function signup(){
		if(password.value == ""){
			error();
		}
		else if(username.value == ""){
			error();
		}
		else if(password.value != "" && username.value != ""){
			defaultEvmStores.setProvider();
			let account = $selectedAccount;
			let s_passwword = hash(password);
			let s_username = hash(username);
			let s_account = hash(account);
			console.log(s_passwword);
			is_error = false;
		}
	}

	function error(){
			is_error = true;
	}
	
</script>

<main>
	<div id="header">
		<b><h1>Welcome to the decentralized Social Media!</h1></b>
	</div><br>
	<div id="sign">
  		<label for="username">Username:</label>
		<input type="text" id="username" name="username" bind:this={username}><br><br>
		<label for="password">Password:</label>
		<input type="password" id="password" name="password" bind:this={password}><br><br>
		{#if is_error == true}
			<b>Password or Username are Incorrect!</b><br>
		{/if}
		<button on:click={signup}>Sign Up</button><br><br><br>
	</div><br><br>

	<div id="copyright">
		<p>Copyright (c) 2022 Mastcharub</p>
		<p>MIT License</p><br>
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
	#sign > b{
		color: red;
	}
	#copyright{
		text-align: center;	
	}
</style>