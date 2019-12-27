const crypto = require('crypto');

// console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));

// crypto.randomBytes(64, (err, buf) => {
//   const salt = buf.toString('base64');
//   console.log('salt is ', salt)
//   crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
//     console.log('password is ', key.toString('base64'))
//   });
// });

const cipher = crypto.createCipher('aes-256-cbc', 'yunseo');
let result = cipher.update('다음 키워드는 모옥감', 'utf8', 'base64');
result = result + cipher.final('base64');
console.log('암호화: ', result);

const decipher = crypto.createDecipher('aes-256-cbc', 'yunseo');
let result2 = decipher.update(result, 'base64', 'utf-8');
result2 = result2 + decipher.final('utf-8');
console.log('복호화: ', result2);