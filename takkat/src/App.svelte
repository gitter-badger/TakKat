<script>
    import { defaultEvmStores } from 'svelte-web3'
    import { connected, web3, selectedAccount, chainId, chainData } from 'svelte-web3'
    defaultEvmStores.setProvider()
</script>

<main>
    <div id="title">
        <h1><b>Welcome to the Decentralized Social Media!</b></h1>
    </div>
</main>

<style>
    #title{
        text-align: center;
    }
</style>