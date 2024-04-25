const Button = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
        </>
    );
  };
  
  export default Button;
/*
        <button
          className={activeFilter === 'Freelance' ? 'active' : ''}
          onClick={() => handleFilterClick('Freelance')}
        >
          Freelance
        </button>
*/