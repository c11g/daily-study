const fs = require('fs');

const folderPath = './folder';

fs.access(folderPath, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, err => {
  if (err) {
    // console.log(err);
    
    if (err.code === 'ENOENT') {
      console.log('폴더 없음');

      fs.mkdir(folderPath, err => {
        if (err) throw err;
        console.log('폴더 만들기 성공');

        fs.open(`${folderPath}/file.js`, 'w', (err, fd) => {
          if (err) throw err;
          console.log(`${folderPath}/file.js 생성 성공! id: ${fd}`);

          fs.rename(`${folderPath}/file.js`, `${folderPath}/new_file.js`, err => {
            if (err) throw err;
            console.log('파일 리네임 성공!')
          });
        });
      });
    } else {
      if (err) throw err;
    }
  } else {
    console.log('이미 폴더 있음');
  }
});