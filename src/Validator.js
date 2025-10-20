class Validator {
  static ERROR_MESSAGE = {
    NEGATIVE_NUMBER: "[ERROR] 음수가 포함되어 있습니다.",
    INVALID_NUMBER: "[ERROR] 숫자가 아닌 값이 포함되어 있습니다.",
  };

  validate(numbers) {
    this.#validateNoNegative(numbers);
    this.#validateAllNumbers(numbers);
  }

  #validateNoNegative(numbers) {
    if (numbers.some((number) => number < 0)) {
      throw new Error(Validator.ERROR_MESSAGE.NEGATIVE_NUMBER);
    }
  }

  #validateAllNumbers(numbers) {
    if (numbers.some((number) => isNaN(number))) {
      throw new Error(Validator.ERROR_MESSAGE.INVALID_NUMBER);
    }
  }
}

export default Validator;
