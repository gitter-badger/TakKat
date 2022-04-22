<script>
    import Gun from 'gun';
    const gun = Gun();

    let test = gun.get('test');
    test.put({test:'test', test_due:'test2'});

    test.on((data) => {
        console.log(data);
    });
</script>

<main>
	<h1>Gun-DB</h1>
</main>