import '../css/general.css'
import '../css/homePage.css'

import Navbar from '../components/nabar'
import Card from '../components/card'

const App = () => (
  <div>

    <Navbar/>
    <div id='firstSection'>
      <div id='firstSectionContent'>
        <div id='leftContent'>
          <h1>Inexplicable</h1>
          <h2>CREATIONS</h2>
          <p>We create digital experience at theintersection between design and technology, helping our clients toimagine the future, today.</p>
        </div>
        <div id='rightContent'>
        </div>
      </div>
    </div>

    <div id='secondSection'>
        <p>#All</p>
        <p>#Freelance</p>
        <p>#Product</p>
        <p>#Exploration</p>
    </div>

    <div id='thirdSection'>
      <div className='cardGroup'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='cardGroup'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>

    <div id='fourthSection'>
        <p>View All projects</p>
    </div>

  </div>
)

export default App