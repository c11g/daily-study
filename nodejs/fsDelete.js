const fs = require('fs');

const folderPath = './folder';

fs.readdir(folderPath, (err, files) => {
  if (err) throw err;
  console.log('폴더 내용 확인', files);

  files.forEach(file => {
    console.log(`${folderPath}/${file}`);
    
    fs.unlink(`${folderPath}/${file}`, err => {
      if (err) throw err;
      console.log('파일 삭제 성공');
    })
  });

  fs.rmdir(folderPath, err => {
    if (err) throw err;
    console.log('폴더 삭제 성공');
  });
});