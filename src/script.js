const promise=new Promise((resolve, reject) => {
    let data=[1,2,3];
    resolve(data);
    reject()
})

promise.catch(()=>{
    console.log('helo')
})