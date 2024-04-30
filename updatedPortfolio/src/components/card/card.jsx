const Card = (props)=>{

    return(
        <div className={props.cardHomePage}>
                <a href="project.html"><div className='img'/></a>
                <div className='cardDesc'>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tellus aliquam turpis rhoncus aliquam orci massa. Magna vel suscipit neque nascetur accumsan ullamcorper.</p>
                <h3>year - 2023</h3>
                <h3>Made in Blender</h3>
            </div>
        </div>
    )
}

export default Card
