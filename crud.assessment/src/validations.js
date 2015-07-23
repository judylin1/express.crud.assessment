module.exports = function validate(title, excerpt, body) {
    errorsArray = [];

    if(!title.trim()) {
      errorsArray.push("Title cannot be blank.");
    }

    if(!excerpt.trim()) {
      errorsArray.push("Excerpt cannot be blank.");
    }

    if(!body.trim()) {
      errorsArray.push("Body cannot be blank.");
    }

    if(errorsArray.length > 0) {
      return errorsArray;
    };
};
