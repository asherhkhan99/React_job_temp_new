import React from 'react'


function Freelancecard(props){
    return(
        <>
        
        <div className="col-md-4 col-sm-6">
							<div className="popular-jobs-container">
								<div className="popular-jobs-box">
									<span className={props.class1}>{props.time}</span>
									<h4 className="flc-rate">{props.rate}</h4>
									<div className="popular-jobs-box">
										<div className="popular-jobs-box-detail">
											<h4>{props.heading}</h4>
											<span className="desination">{props.designation}</span>
										</div>
									</div>
									<div className="popular-jobs-box-extra">
										<ul>
											<li>Php</li>
											<li>Android</li>
											<li>Html</li>
											<li className="more-skill bg-primary">+3</li>
										</ul>
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
									</div>
								</div>
								<a href="#" className="btn btn-popular-jobs bt-1">View Detail</a>
							</div>
						</div>

        
        </>
    )
}

export default Freelancecard;