import '../css/general.css'
import '../css/homePage.css'

import Navbar from '../components/nabar'

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
          <p>test</p>
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
        <div className='card'>
          <div className='img'></div>
          <div className='cardDesc'>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam turpis rhoncus aliquam orci massa. Magna vel suscipit neque nascetur accumsan ullamcorper.</p>
            <h3>year - 2023</h3>
            <h3>Made in Blender</h3>
          </div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='cardDesc'>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam turpis rhoncus aliquam orci massa. Magna vel suscipit neque nascetur accumsan ullamcorper.</p>
            <h3>year - 2023</h3>
            <h3>Made in Blender</h3>
          </div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='cardDesc'>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam turpis rhoncus aliquam orci massa. Magna vel suscipit neque nascetur accumsan ullamcorper.</p>
            <h3>year - 2023</h3>
            <h3>Made in Blender</h3>
          </div>
        </div>
      </div>

      <div className='cardGroup'>
        <div className='card'>
          <div className='img'></div>
          <div className='cardDesc'>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam turpis rhoncus aliquam orci massa. Magna vel suscipit neque nascetur accumsan ullamcorper.</p>
            <h3>year - 2023</h3>
            <h3>Made in Blender</h3>
          </div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='cardDesc'>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam turpis rhoncus aliquam orci massa. Magna vel suscipit neque nascetur accumsan ullamcorper.</p>
            <h3>year - 2023</h3>
            <h3>Made in Blender</h3>
          </div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='cardDesc'>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam turpis rhoncus aliquam orci massa. Magna vel suscipit neque nascetur accumsan ullamcorper.</p>
            <h3>year - 2023</h3>
            <h3>Made in Blender</h3>
          </div>
        </div>
      </div>
    </div>

    <div id='fourthSection'>
        <p>View All projects</p>
    </div>

  </div>
)

export default App