import React,{useState} from "react";
const API_IMG="https://image.tmdb.org/t/p/w500/";
import {Modal,Button} from "react-bootstrap";
const Movies = ({title,poster_path,vote_average,release_date,overview}) =>{
    const [show,setShow] = useState(false);
    const handleShow =()=>setShow(true);
    const handleClose =()=>setShow(false);

    return(
        <div className={"card bg-secondary text-center mb-3"}>
            <div className={"card-body"}>
                <img  className={"card-img-top"} src={API_IMG+poster_path}/>
            <div className={"card-body"}>
                <button className={"btn btn-dark"} type="button" onClick={handleShow}>View More</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img  className={"card-img-top"} style={{width:'14rem'}} src={API_IMG+poster_path}/>
                        <h1>{title}</h1>
                        <h4>IMDB:{overview}</h4>
                          <h5>Release:{release_date}</h5>
                        <h6>overwiev</h6>
                        <p>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button varient="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
        </div>
    )
}
export default Movies;