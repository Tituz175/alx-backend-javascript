export default function getFullResponseFromAPI(succcess) {
  return new Promise((resolve, reject) => {
    if (succcess) {
      return resolve({ status: 200, body: "Success" });
    }
    return reject(new Error("The fake API is not working currently"));
  })
}
