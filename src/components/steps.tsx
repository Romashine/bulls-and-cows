import * as React from "react";

export interface IStepsProps {
    items: string[];
}
export interface IStepsState { }

export class Steps extends React.Component<IStepsProps, IStepsState> {

    constructor(props: IStepsProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div>
                <h3>Результаты</h3>
                {this.props.items.map((item, index) => {
                    return (
                        <div key={index}>{item}</div>
                    );
                })}
            </div>
        );
    }
}
