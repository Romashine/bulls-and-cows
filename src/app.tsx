import * as React from "react";
import { NPC } from "./npc";

// Components
import { Count } from "./components/count";
import { Header } from "./components/header";
import { Steps } from "./components/steps";
import { Icon } from "./components/icon";

export interface IAppProps { }
export interface IAppState {
    steps?: string[];
    number?: string;
    isStarted?: boolean;
}

export class App extends React.Component<IAppProps, IAppState> {

    public static defaultState(): IAppState {
        return {
            isStarted: false,
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
                <div className="grid">
                    <div className="gridHeader">
                        <Header title="Быки и коровы" icon="https://freelance.ru/img/portfolio/pics/00/0F/3C/998635.jpg" />
                    </div>
                    <div className="gridStatic">
                    </div>
                    <div className="gridGroup">
                        <div className="gridFrand">
                            Друзья
                        </div>
                        <div className="gridGame">
                            {this.state.isStarted?
                            <div className="round" onClick={() => { this.start(); }}><Icon name = "replay"/></div>
                            :
                            <div className="start-button round" onClick={() => { this.restart(); }}><Icon name = "play_circle_outline"/></div>
                            }
                            <input type="text"
                                onKeyPress={this.onKeyPress.bind(this)}
                                onChange={(e) => { this.setState({ number: e.currentTarget.value }); }}
                            />
                            <Steps items={this.state.steps!} />
                            <Count count={this.game.count} />
                        </div>
                        <div className="gridChat">
                            Чат
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    protected onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.charCode === 13) { // Enter
            this.start();
        }
    }

    protected restart() {
        this.game = new NPC();
        this.setState({ steps: [], isStarted: true });
    }

    protected start() {
        const steps = this.state.steps || [];
        const userNum = this.state.number || "";
        const answer = this.game.compare(userNum);
        let isStarted = true;
        if (answer.error) {
            steps.push(answer.error);
        } else {
            steps.push(`${++this.game.count}  ${userNum}   ${answer.bulls}б ${answer.cows}к`);
            if (answer.bulls === 4) {
                steps.push(`=================================`);
                steps.push(`Игра окончена`);
                isStarted = false;
            }
        }
        this.setState({ steps, isStarted });
    }

}
