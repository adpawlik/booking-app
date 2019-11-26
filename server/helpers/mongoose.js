module.exports = {
  normErrors: (errors) => {
    let normErrors = [];
    for (let property in errors) {
      if (errors.hasOwnProperty(property)) {
        normErrors.push({title: property, detail: errors[property].message});
      }
    }
    return normErrors;
  }
}