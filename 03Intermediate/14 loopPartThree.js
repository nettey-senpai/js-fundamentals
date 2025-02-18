const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];

// for of -for  arrays majorly
for (const n of names) {
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline.in"
}

// for in - for objects majorly
for(const n in symbols) {
    console.log(`Key is ${n} and value is: ${symbols[n]}`);
}