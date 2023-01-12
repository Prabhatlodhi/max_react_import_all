import './Profilecard.css' 

function ProfileCard({title, handle, image}) {

    // const title = props.title;
    // const handle = props.handle;

    // const {title, handle} = props;

  return (
    <div className="wrapper">
      <img src={image} alt="alexa Images"
       />
      <h1>{title}</h1>
      <p>{handle}</p>
    </div>
  )
}

export default ProfileCard
