import styles from "../components/Netflix.module.css"
import  Styled  from "styled-components";

export const Card = ({ data }) => {
  //? Destructure data from props
  //    const {data} = props

  // ? More destrcture datas from props.data
  const { name, img_url, rating, description, cast, genre, watch_url } = data;

  // const watchNowBtn = {
    // backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    // margin: "1rem 0",
    // padding: "0.5rem 2rem",
    // fontSize: "1rem",
    // cursor: "pointer",
    // border: "none",
    // borderRadius: "2rem",
  // };

  //? Styled Component make watchnow button

  const WatchNowBtn = Styled.button({
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    margin: "1rem 0",
    padding: "0.5rem 2rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "2rem",
  });


  //! const ratingClass = rating >= 8.5 ? "super-hit" : "average";
  
  //* in css modules
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
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
        <img className={styles.card_image} src={img_url} alt="The Nurse" />
      </div>

      <div className={styles.card_content}>
        <h2>Name: {name}</h2>
        <h3
          style={{
            margin: "1.2rem 0",
            fontSize: "22px",
          }}
        >
          Rating:{" "}
          {/* <span style={{ color: rating >= 7 ? "green" : "red" }}>{rating}</span>{" "} */}
          {/* //! By this we can't add multiple class name 👇  */}
          {/* <span className={(rating, rating >= 8.5 ? "super-hit" : "average")}> */}
          {/* //* Below is solution for multiple class name 👇 */}
          {/* <span className={`rating ${rating >= 8.5 ? "super-hit" : "average"}`}> */}
          {/* //! but, it was not optimized so we can write the expression into variable and call it in template literals */}
          {/* //* Best Approach for multiple class usage with conditional styling */}
          {/* <span className={`rating ${ratingClass}`}> */}
          {/* //! but now we are moving to css modules */}
          {/* //* css modules */}
          <span className={`${styles.rating} ${ratingClass}`}>
            {rating}
          </span>{" "}
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
          {/* <button style={watchNowBtn}>Watch Now</button> */}
          <WatchNowBtn>Watch Now</WatchNowBtn>
        </a>
      </div>
    </li>
  );
};
