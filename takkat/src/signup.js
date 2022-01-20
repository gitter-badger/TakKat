import { defaultEvmStores, selectedAccount } from 'svelte-web3';
export let is_error = false;
export let username;
export let password;

function signup(){
	if(password.value == ""){
		error();
	}
	else if(username.value == ""){
		error();
	}
	else if(password.value != "" && username.value != ""){
		defaultEvmStores.setProvider();
		export let account = $selectedAccount;
		is_error = false;
		}
	}

function error(){
		is_error = true;
}
	