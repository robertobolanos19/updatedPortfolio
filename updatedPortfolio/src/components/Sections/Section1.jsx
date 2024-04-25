import '../Sections/Section1.css'
import Header from "../header/header";

const Section1 = (props) => {
    return (
        <>
            <div className="container">
            <div className="left">
                <div className="content">
                <Header title='Inexplicable' desc='Creations'/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    dignissim neque vitae libero volutpat, sit amet tristique eros
                    volutpat.
                </p>
                </div>
            </div>
            <div className="right">
                <img src="https://via.placeholder.com/600x400" alt="placeholder" />
            </div>
            </div>
        </>
    );
  };
  
  export default Section1;