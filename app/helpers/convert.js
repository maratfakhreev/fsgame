class Convert {
  static toBoolean(value) {
    return value === 'true';
  }

  static toString(value) {
    return value.toString();
  }

  static toArray(str) {
    return (str) ? str.split(',') : [];
  }
}

module.exports = Convert;
