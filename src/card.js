import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck , faTimes} from '@fortawesome/free-solid-svg-icons';

function Card(props){ 
    return(
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-center">{props.data.type}</h5>
        <h6 className="card-price text-center">{props.data.place}</h6>
        <hr></hr>
        <ul className="fa-ul">
          
        <li><span className="fa-li"><FontAwesomeIcon icon="check"/></span>{props.data.t1}</li>
        <li><span className="fa-li"><FontAwesomeIcon icon="check"/></span>{props.data.t2}</li>
        <li><span className="fa-li"><FontAwesomeIcon icon="check"/></span>{props.data.t3}</li>
        <li><span className="fa-li"><FontAwesomeIcon icon="check"/></span>{props.data.t4}</li>
        <li className={props.data.type==='FREE'?('text-muted'):('')}>
        <span className="fa-li"><FontAwesomeIcon icon={props.data.type==='FREE'?"times":"check"}/></span>
{props.data.t5}
          </li>
        <li className={props.data.type==='FREE'?('text-muted'):""}>
        <span className="fa-li"><FontAwesomeIcon icon={props.data.type==='FREE'?"times":"check"}/></span>
{props.data.t6}</li>
        <li className={props.data.type==='FREE'?('text-muted'):""}>
        <span className="fa-li"><FontAwesomeIcon icon={props.data.type==='FREE'?"times":"check"}/></span>
{props.data.t7}</li>
        <li className={(props.data.type==='FREE')||(props.data.type==='PLUS')?'text-muted':''}>
        <span className="fa-li"><FontAwesomeIcon icon={props.data.type==='FREE'?"times":"check"}/></span>
          {props.data.t8}</li>
        </ul>
        <a href="#" className="btn btn-block btn-primary text-uppercase" onClick={()=>props.handleclick(props.data)}>Button</a>
        </div>
        </div>
        </div>
            );
           }
export default Card;
