import { MissionUtils } from "@woowacourse/mission-utils";
import Calculator from "./Calculator.js";
import StringParser from "./StringParser.js";
import Validator from "./Validator.js";

class App {
  #stringParser;
  #validator;
  #calculator;

  constructor() {
    this.#stringParser = new StringParser();
    this.#validator = new Validator();
    this.#calculator = new Calculator();
  }

  async input() {
    return await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }

  output(result) {
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  async run() {
    // 1. 문자열 입력 받기
    const input = await this.input();
    // 2. 문자열 파싱
    const numbers = this.#stringParser.parse(input);
    // 3. 유효성 검증
    this.#validator.validate(numbers);
    // 4. 계산 기능
    const sum = this.#calculator.sum(numbers);
    this.output(sum);
  }
}

export default App;
