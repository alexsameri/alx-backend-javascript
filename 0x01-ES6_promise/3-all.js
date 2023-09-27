import { uploadPhoto, createUser } from './utils.js'

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${body} ${firstName} ${lastName}`)
    })
    
    .catch((err) => {
      console.log('Signup system offline');
    });
}
