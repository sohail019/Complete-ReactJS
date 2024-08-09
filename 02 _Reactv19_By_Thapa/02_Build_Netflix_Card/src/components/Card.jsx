export const Card = ({ data }) => {
  //? Destructure data from props
  //    const {data} = props

  // ? More destrcture datas from props.data
  const { name, img_url, rating, description, cast, genre, watch_url } = data;
  return (
    <li className="card">
      <div>
        {/* <img
          src={props.data.img_url}
          alt="The Nurse"
          width="40%"
          height="40%"
        />
      </div>

      <h2>Name: {props.data.name}</h2>
      <h3>Rating: {props.data.rating}</h3>
      <p>Summary: {props.data.description}</p>
      <p>Cast: {props.cast}</p>
      <p>Genre: {props.data.genre}</p>
      <a href={props.data.watch_url}>
        <button>Watch Now</button>
      </a>
        */}
        {/* //   ! In Above, props.data is repeting in each time
        //   * We can reduce that by using Destructing
         */}
        {/* <img
          src={data.img_url}
          alt="The Nurse"
          width="40%"
          height="40%"
        />
      </div>

      <h2>Name: {data.name}</h2>
      <h3>Rating: {data.rating}</h3>
      <p>Summary: {data.description}</p>
      <p>Cast: {data.cast}</p>
      <p>Genre: {data.genre}</p>
      <a href={data.watch_url}>
        <button>Watch Now</button>
      </a>
    </li> */}

        {/* //! In Above, data is repeting in each time 
    //* We can reduce that by using Destructing */}
        <img className="card-image" src={img_url} alt="The Nurse" />
      </div>

      <div className="card-content">
        <h2>Name: {name}</h2>
        <h3
          style={{
            margin: "1.2rem 0",
            fontSize: "22px",
          }}
        >
          Rating:{" "}
          <span style={{ color: rating >= 7 ? "green" : "red" }}>{rating}</span>{" "}
        </h3>
        <p>
          <span>Summary: </span> {description}
        </p>
        <p>
          <span>Cast: </span> {cast}
        </p>
        <p>
          <span>Genre: </span> {genre}
        </p>
        <a href={watch_url}>
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
