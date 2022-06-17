import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import EventsButtons from "./components/EventsButtons";
import NewEventForm from "./components/NewEventForm";

export interface PartyEvents {
  title: string;
  date: string;
  location: string;
  id: number;
}

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEvents, setShowEvents] = useState<boolean>(true);
  const [events, setEvents] = useState<PartyEvents[]>([]);

  const handleShowEvents = () => {
    setShowEvents((prevState) => !prevState);
  };

  const handleClick = (id: number): void => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => event.id !== id);
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const addEvent = (event: PartyEvents) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const subtitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      <EventsButtons
        showEvents={showEvents}
        handleShowEvents={handleShowEvents}
      />

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal isSalesModal={false}>
          <NewEventForm addEvent={addEvent} handleClose={handleClose} />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;

// { title: 'mario"s birthday bash', id: 1 },
//     { title: 'bowser"s live stream', id: 2 },
//     { title: "race on moo moo farm", id: 3 },
