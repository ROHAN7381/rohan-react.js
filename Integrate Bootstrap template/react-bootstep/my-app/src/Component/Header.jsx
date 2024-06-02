import React from "react";

const Header = () => {
  return (
    <div>
   
      <div className="container-fluid  bg-primary-subtle  vh-100 p-0 main">
      <nav className="navbar bg-primary  ">
      <div className="logo text-white">
        
      </div>
      <ul className="mt-1 p-1">
      <li >Home</li>
      <li>About</li>
      <li>Service</li>
      <li>Contact</li>
      </ul>
      </nav>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="col-lg-6  text-center  p-5  mt-0 border cnt-box">
            <h1 className="mt-5 ">Hey buddy!, I'm John wick</h1>
            <p className="mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              viverra vehicula enim ut rhoncus. Mauris arcu velit, pretium nec
              varius quis, posuere eget urna. Fusce at rutrum dolor.
            </p>
            <button className="btn btn-primary avilabal"style={{width:"140px",height:"50px",background:"black",color:"white"}}><h3>I'm AVAILABLE</h3></button>
          </div>
          <div className="col-lg-6  text-center  mt-1 img-box ">
            <img
              style={{ width: "80vh", height: "80vh" ,padding:"40px",}}
              className="img-fluid"
              src="https://img.freepik.com/premium-photo/smiley-man-pointing-with-copy-space_23-2148221719.jpg"
              alt="John Doe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
