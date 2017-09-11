interface ICompareResult {
    bulls: number;
    cows: number;
    error?: string;
}
class NPC {
    protected num: string;
    constructor() {
        this.num = "0345";
    }
    /**
     * Проверка числа: состоит из различных 4-х цыфр
     * @param num 
     */
    public check(num: string) {
        return /^(?:(\d)(?!.*\1)){4}$/.test(num);
    }

    /**
     * Сравнение userNum с NPC.num, вывод результата answer
     * @param userNum 
     */
    public compare(userNum: string) {
        const answer: ICompareResult = {
            bulls: 0,
            cows: 0,
        };
        if (!this.check(userNum)) {
            answer.error = `Некорректное значение ${userNum}`;
            return answer;
        }
        for (let i = 0; i < 4; i++) {
            const find = this.num.indexOf(userNum.charAt(i));
            if (find === i) {
                answer.bulls++;
            } else if (find !== -1) {
                answer.cows++;
            }
        }
        return answer;
    }
}
const game = new NPC();

function start() {
    while (true) {
        const userNum = prompt("Давай угадай!") || "";
        const answer = game.compare(userNum);
        console.log(`${userNum}   ${answer.bulls}б ${answer.cows}к`);
        if (answer.bulls === 4) {
            break;
        }
    }
}