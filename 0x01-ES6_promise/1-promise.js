export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
    else {
      reject(newError('The fake API is not working currently'));
    }
  });
}