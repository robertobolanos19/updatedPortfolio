import '../css/project.css'
import '../css/general.css'

import Navbar from '../components/nabar'
import Card from '../components/card'

const App = () => (
  <div>
    <Navbar/>
    <div id='firstSection'>
      <div id='firstSectionContent'>
        <div id='leftContent'>
          <h1 id='title'>Gundam</h1>
          <h1>“You, people down there, are you satisfied with the way the world is? As for me… I hate it.” – Lockon Stratos</h1>
          <p>Death Stranding is a game  like no other, it was actually one of the few games I found myself  returning to and replaying over and over again. The way Hideo Kojima  used audio for both background audio and gameplay was brilliant. I was  inspired to create these concept 3D model headphones to enhance the  calming music as well as pick up the movement of the BT’s that are  nearby.</p>
          <div id='subContent'>
            <h5 className='tag'>Focus</h5>
            <h5>3D Modeling</h5>
            <h5 className='tag'>Services</h5>
            <h5>Render / 3D Design</h5>
          </div>
        </div>
        <div id='rightContent'>
        </div>
      </div>

      <div>
        <div className='cardGroup'>
          <Card name=''/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  </div>
)

export default App
