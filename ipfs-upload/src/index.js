import * as IPFS from 'ipfs-core';

const ipfs = IPFS.create();

(async () => { 
    const res = await ipfs.add("hello world")
    console.log(res);
})()