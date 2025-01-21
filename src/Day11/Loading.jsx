import "../App.css"


const LoadingButton = () => {
  
    return (
      <button className={' loading-button loading '} >
        Loading
          <div className="spinner"></div>
      </button>
    );
  };
  
  export default LoadingButton;
  