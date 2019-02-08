const fs = require('fs');

let list;

fs.readdir('./', (err, data) => {
    if (err) throw err;
    list = data.filter(item => item[0] !== '.' )
    
    list.forEach(item => {
        list += `<a href=''>${item}</a>`
    });
    
    fs.writeFile('./index.html', list, 'utf-8', (err) => {
        if(err) throw err;
    });
});
