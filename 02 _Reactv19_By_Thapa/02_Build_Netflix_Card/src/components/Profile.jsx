//* Coding Challenge:
//? Create a React App that demonstrates the use of props by building a simple profile card system. Each profile card should display user's name, age, and a personalized greeting message.
//? Additonally, use props.children to allow for flexible content inside each profile card.

//* Challenge Details:

//? Create a main component: Profile
// This component should render multiple ProfileCard components, each with different user data and children elements.

// ? Create a ProfileCard Component:
// This component should accept props for the user's name, age and a personalized greeting message.
// The component should also use props.children to render additional content inside the card.

//* Requirements:

//? Props usage:
// Pass the user's name, age and a personalized greeting message as props to the Profilecard component

// ? Children Prop:
// Use props.children to allow for flexible content inside the ProfileCard component, such as additional text, images or buttons.

// ? Dynamic Content:
// The personalized greeting message should be a JSX element passed as a prop

function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>

      <ProfileCard
        name="Sohail"
        age={21}
        greeting={
          <div>
            <strong>Hi Sohail, have a wonderful day</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Salman"
        age={24}
        greeting={
          <div>
            <strong>Hi Salman, have a wonderful day</strong>
          </div>
        }
      >
        <p>Hobbies: Coding, Music</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;

function ProfileCard(props) {
  const { name, age, greeting } = props;
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      {/* //! Here, the problem comes as <div> cannot appear as a descendant of <p></p> */}
      {/* //* Solution is to use props.children */}
      <div>{props.children}</div>
    </>
  );
}
