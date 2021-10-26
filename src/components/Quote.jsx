export const Quote = ({ quote }) => {
  return (
    <p>
      {quote.text}
      <br />
      <span style={{ display: "block", marginTop: "1rem" }}>
        - {quote.character} -
      </span>
      <img style={{ width: "10rem" }} src={quote.image} alt="character image" />
    </p>
  );
};
