import "./NewEventForm.css";
import { useState } from "react";
import { PartyEvents } from "./../App";

interface NewEventFormProps {
  addEvent: (event: PartyEvents) => void;
  handleClose: () => void;
}

const NewEventForm: React.FC<NewEventFormProps> = ({
  addEvent,
  handleClose,
}) => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [location, setLocation] = useState<string>("manchester");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("manchester");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const event = {
      title,
      date,
      location,
      id: Math.floor(Math.random() * 10000),
    };

    addEvent(event);

    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <span className="close" onClick={handleClose}>
        X
      </span>
      <h2>Add New Event</h2>

      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>

      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>

      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
};

export default NewEventForm;
