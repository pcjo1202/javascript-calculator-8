import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #input;
  #separator;
  #numberArray;

  constructor() {
    this.#input = "//;\\n1;2;3";
    this.#separator = null;
    this.#numberArray = [];
  }

  /**
   * 문자열 입력 받기
   * @returns {Promise<string>}
   */
  async input() {
    return await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }

  /**
   * 문자열 파싱
   * @returns {void}
   */
  parseInput() {
    const input = this.#input;

    if (this.isCustomSeparator(input)) {
      const prefix = input.split("\\n")[0]; // "//;\\n1;2;3" -> "//;"
      const str = input.split("\\n")[1]; // "//;\\n1;2;3" -> "1;2;3"

      this.#separator = prefix.split("//")[1]; // "//;" -> ";"
      this.#numberArray = str.split(this.#separator).map(Number);

      return;
    }

    // 3. 기본 구분자(쉼표, 콜론) 사용 및 문자열 분리
    this.#numberArray = input.split(/[,:]/g).map(Number);
  }

  /**
   * 커스텀 구분자 체크
   * @param {string} str
   * @returns {boolean}
   */
  isCustomSeparator(str) {
    return str.startsWith("//") && str.includes("\\n");
  }

  /**
   * 출력 기능
   * @param {number} result
   * @returns {void}
   */
  output(result) {
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  async run() {
    // 1. 문자열 입력 받기
    this.#input = await this.input();
    // 2. 문자열 파싱
    this.parseInput();
  }
}

export default App;
