import * as React from "react";

export interface IHeaderProps {
    title: string;
    icon?: string;
}
export interface IHeaderState { }

export class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor(props: IHeaderProps) {
        super(props);

        this.state = {};
    }

    public render() {
        const { title, icon } = this.props;
        return (
            <div>
                <img src={icon} style={{ width: "100px" }} />
                <span>{title}</span>
            </div>
        );
    }
}
