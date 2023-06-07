import {randomBytes, scryptSync} from "crypto";


const createHashedPassword = (password: string) => {
  const salt = randomBytes(8).toString('hex');
  const hashBuffer = scryptSync(password, salt, 32);
  const hashedPassword = `${hashBuffer.toString('hex')}.${salt}`;

  return hashedPassword;
}

const verifyPassword = (password: string, storedPassword) => {
  const [storedPasswordHash, salt] = storedPassword.split('.');

  const hashToCompare = scryptSync(password, salt, 32).toString('hex');
  return hashToCompare === storedPasswordHash;
}
(() => {
  const password = 'abcd12345678'
  const hashedPassword = createHashedPassword(password)
  console.log(hashedPassword);

  const isPasswordCorrect = verifyPassword(password, hashedPassword);
  console.log(isPasswordCorrect);


})()