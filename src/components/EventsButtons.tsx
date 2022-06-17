interface EventsButtonsProps {
  showEvents: boolean;
  handleShowEvents: () => void;
}

const EventsButtons: React.FC<EventsButtonsProps> = ({
  showEvents,
  handleShowEvents,
}) => {
  return (
    <>
      {showEvents ? (
        <div>
          <button onClick={handleShowEvents}>hide events</button>
        </div>
      ) : (
        <div>
          <button onClick={handleShowEvents}>show events</button>
        </div>
      )}
    </>
  );
};

export default EventsButtons;
