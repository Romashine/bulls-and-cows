import * as React from "react";

export interface ICountProps {
    count: number;
}
export interface ICountState { }

export class Count extends React.Component<ICountProps, ICountState> {

    constructor(props: ICountProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div className="count">
                <h3>Колличество ходов {this.props.count}</h3>
            </div>
        );
    }
}
