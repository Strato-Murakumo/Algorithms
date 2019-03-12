let task = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
})

let timeout = new Promise((resolve, reject) => {
    setTimeout(reject, 1000);
})

Promise.race([task, timeout]).then((res) => { }).catch((err) => { })