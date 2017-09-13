import { NPC } from "./npc";

interface ICompareResult {
    bulls: number;
    cows: number;
    error?: string;
}

let game = new NPC();

export function restart() {
    const $answer = document.getElementById("answer") as HTMLInputElement;
    $answer.value = ``;
    game = new NPC();
}

export function start() {
    const $answer = document.getElementById("answer") as HTMLInputElement;
    const $text = document.getElementById("text") as HTMLInputElement;

    if ($answer && $text) {
        const userNum = $text.value;
        const answer = game.compare(userNum);
        if (answer.error) {
            $answer.value += `\n  ${answer.error}`;
        } else {
            $answer.value += `\n ${++game.count}  ${userNum}   ${answer.bulls}б ${answer.cows}к`;
            if (answer.bulls === 4) {
                $answer.value += `\n YOU WIN`;
                game = new NPC();
            }
        }
    } else {
        alert("Element with id answer not found");
    }
}
