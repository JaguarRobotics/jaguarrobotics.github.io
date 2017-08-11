import React from "react";
import Calendar from "../content/meta/Calendar";
import "./CountdownTimer.css";

export default class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getNextEvent();
        this.handleEventOccurred = this.handleEventOccurred.bind(this);
        this.handleSecondPassed = this.handleSecondPassed.bind(this);
    }

    getNextEvent() {
        let currentTime = new Date().getTime() - 1000;
        var events = Calendar.sort((a, b) => a.date - b.date).filter(ev => ev.date > currentTime && ev.timer);
        if (events.length > 0) {
            setTimeout(this.handleEventOccurred, Math.min(events[0].date - currentTime, 2147483647));
        }
        return {
            "event": events[0],
            "remaining": events[0].date - currentTime
        };
    }

    handleEventOccurred() {
        this.setState(this.getNextEvent());
    }

    handleSecondPassed() {
        this.setState({
            "remaining": this.state.event.date - new Date().getTime() + 1000
        });
    }

    componentDidMount() {
        this.setState({
            "iid": setInterval(this.handleSecondPassed, 100)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.iid);
    }

    render() {
        return this.state.event ? (
            <div>
                <h5 className="center">{this.state.event.timer}</h5>
                <div className="timer-digit timer-digit-3">
                    {("00" + Math.floor(this.state.remaining / 86400000)).slice(-3)}
                </div>
                <div className="timer-separator" />
                <div className="timer-digit timer-digit-2">
                    {("0" + (Math.floor(this.state.remaining / 3600000) % 24)).slice(-2)}
                </div>
                <div className="timer-separator" />
                <div className="timer-digit timer-digit-2">
                    {("0" + (Math.floor(this.state.remaining / 60000) % 60)).slice(-2)}
                </div>
                <div className="timer-separator" />
                <div className="timer-digit timer-digit-2">
                    {("0" + (Math.floor(this.state.remaining / 1000) % 60)).slice(-2)}
                </div>
            </div>
        ) : <div />;
    }
}
