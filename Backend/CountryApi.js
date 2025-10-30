import fs from "fs"

fetch("https://restcountries.com/v3.1/all?fields=name,flags,currencies,cca2,cca3")
    .then(res => res.json())
    .then(data => {
        fs.writeFile("countries.json", JSON.stringify(data), (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    })
    .catch(console.error);
