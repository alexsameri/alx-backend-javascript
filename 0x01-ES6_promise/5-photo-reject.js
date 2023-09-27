function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

console.log(uploadPhoto('guillaume.jpg'));