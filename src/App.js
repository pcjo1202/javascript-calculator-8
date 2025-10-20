import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #input;

  constructor() {
    this.#input = "";
  }

  /**
   * @returns {Promise<string>}
   */
  async input() {
    return await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }

  async run() {
    // 1. 문자열 입력 받기
    this.#input = await this.input();
  }
}

export default App;
