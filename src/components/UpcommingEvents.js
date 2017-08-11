import React from "react";
import Calendar from "../content/meta/Calendar";

export default class UpcommingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getNextEvents();
        this.handleEventOccurred = this.handleEventOccurred.bind(this);
    }

    getNextEvents() {
        let currentTime = new Date().getTime();
        var events = Calendar.sort((a, b) => a.date - b.date).filter(ev => ev.date > currentTime);
        if (events.length > 5) {
            events.splice(5, events.length - 5);
        }
        if (events.length > 0) {
            setTimeout(this.handleEventOccurred, Math.min(events[0].date - currentTime, 2147483647));
        }
        return {
            "events": events
        };
    }

    handleEventOccurred() {
        this.setState(this.getNextEvents());
    }

    render() {
        return (
            <div>
                <h5 className="center">Upcomming Events</h5>
                <ul className="browser-default">
                    {this.state.events.map((ev, i) => (
                        <li key={"event-" + i}>
                            {ev.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
