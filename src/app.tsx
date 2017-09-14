import * as React from "react";
import { NPC } from "./npc";

// Components
import { Header } from "./components/header";
import { Steps } from "./components/steps";

export interface IAppProps { }
export interface IAppState {
    steps?: string[];
    number?: string;
}

export class App extends React.Component<IAppProps, IAppState> {

    static defaultState(): IAppState {
        return {
            number: "",
            steps: [],
        };
    }

    protected game = new NPC();

    constructor(props: IAppProps) {
        super(props);

        this.state = App.defaultState();
    }

    public render() {
        return (
            <div>
                <Header title="Быки и коровы" icon="https://freelance.ru/img/portfolio/pics/00/0F/3C/998635.jpg" />
                <div>
                    <button>Старт</button>
                    <button>Проверить</button>
                    <input type="text"
                        onKeyPress={this.onKeyPress.bind(this)}
                        onChange={(e) => { this.setState({ number: e.currentTarget.value }); }}
                    />
                </div>
                <Steps items={this.state.steps!} />
            </div>
        );
    }

    protected onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.charCode === 13) { // Enter
            this.start();
        }
    }

    protected restart() {
        this.game = new NPC();
        this.setState({ steps: [] });
    }

    protected start() {
        const steps = this.state.steps || [];
        const userNum = this.state.number || "";
        const answer = this.game.compare(userNum);
        if (answer.error) {
            steps.push(answer.error);
        } else {
            steps.push(`${++this.game.count}  ${userNum}   ${answer.bulls}б ${answer.cows}к`);
            if (answer.bulls === 4) {
                steps.push(`=================================`);
                steps.push(`Игра окончена`);
            }
        }
        this.setState({ steps });
    }

}
