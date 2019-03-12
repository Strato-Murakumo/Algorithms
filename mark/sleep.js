function sleep(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    })
}

sleep(1000).then()