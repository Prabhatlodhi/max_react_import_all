import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './Imageas/tree-736885__480.jpg'
import './App.css'

function App() {
  return <div className='appmain'>
  <header>
    Personal DIgital Assistant
  </header>
 
    <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage}
     />
    <ProfileCard title='222' handle='@22222'  image={AlexaImage}/>
    <ProfileCard title='3333' handle='@444'  image={AlexaImage}/>
    
  </div>;
}
export default App;
