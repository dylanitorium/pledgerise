modules.export = (array, callback) => {
  let chain = Promise.resolve();
  array.forEach((item) => { chain = chain.then(() => (callback(item))) });
  return chain;
};
