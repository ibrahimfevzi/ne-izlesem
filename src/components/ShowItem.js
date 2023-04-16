const ShowItem = ({ poster, title, date }) => {
  // const { poster, title, date } = props;
  return (
    <div className="showItem">
      <div className="showItem-poster">
        <img src={poster} alt="" />
      </div>
      <div className="showItem-info">
        <h3>{title}</h3>
        <p>{date}</p>
        <button>Preview</button>
      </div>
    </div>
  );
};

export default ShowItem;
