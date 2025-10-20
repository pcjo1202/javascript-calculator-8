class StringParser {
  parse(input) {
    if (this.#isCustomSeparator(input)) {
      return this.#parseCustomSeparator(input);
    }
    return this.#parseDefaultSeparator(input);
  }

  #isCustomSeparator(str) {
    return str.startsWith("//") && str.includes("\\n");
  }

  #parseCustomSeparator(input) {
    const [prefix, numbersString] = input.split("\\n"); //
    const separator = prefix.split("//")[1];
    return numbersString.split(separator).map(Number);
  }

  #parseDefaultSeparator(input) {
    if (input === "") return [];
    return input.split(/[,:]/g).map(Number);
  }
}

export default StringParser;
