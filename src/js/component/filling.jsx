import React from "react";

const Filling = () => {
	return (
        <div className="container p-0 ">
		    <div className="jumbotron p-5 bg-light " justify-content="center">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                     <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <div className="row row-cols-1 row-cols-lg-4 g-4 text-center">
                <div className="card m-4 " style={{width: "18rem"}}>
                    <img src="https://place-hold.it/500x325" className="card-img-top" alt="card img cap"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-4" style={{width: "18rem"}}>
                    <img src="https://place-hold.it/500x325" className="card-img-top" alt="card img cap"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-4" style={{width: "18rem"}}>
                    <img src="https://place-hold.it/500x325" className="card-img-top" alt="card img cap"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card m-4" style={{width: "18rem"}}>
                    <img src="https://place-hold.it/500x325" className="card-img-top" alt="card img cap"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        </div>
	);
};

export default Filling;