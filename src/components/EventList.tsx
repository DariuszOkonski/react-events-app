import React from "react";
import styles from "./EventList.module.css";

import { PartyEvents } from "./../App";

interface EventListProps {
  events: PartyEvents[];
  handleClick: (id: number) => void;
}

const EventList: React.FC<EventListProps> = ({ events, handleClick }) => {
  return (
    <>
      {events.length ? (
        events.map((event, index) => (
          <div key={event.id} className={styles.card}>
            <h2>{event.title}</h2>
            <hr />
            <small>
              {event.date} - {event.location}
            </small>
            <br />
            <button onClick={() => handleClick(event.id)}>delete event</button>
          </div>
        ))
      ) : (
        <h2>Empty array</h2>
      )}
    </>
  );
};

export default EventList;
