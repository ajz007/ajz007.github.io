import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../../redux/reducers/myDetailsSlice';

export default function MyDetails() {
	const dispatch = useDispatch();
	const contactDetailsFronRedux = useSelector((state) => state.myDetails)

	useEffect(() => { dispatch(load()) }, [dispatch])


	return (

		<div id="fh5co-about" className="animate-box">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>About Me</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<ul className="info">
							<li><span className="first-block">Full Name:</span><span className="second-block">{contactDetailsFronRedux.fullName}</span></li>
							<li><span className="first-block">Email:</span><span className="second-block">{contactDetailsFronRedux.email}</span></li>
							<li><span className="first-block">Phone:</span><span className="second-block">{contactDetailsFronRedux.phone}</span></li>
							<li><span className="first-block">Website:</span><span className="second-block"><a href={contactDetailsFronRedux.website} target="_blank" rel="noreferrer">{contactDetailsFronRedux.website} </a></span></li>
							<li><span className="first-block">Address:</span><span className="second-block">{contactDetailsFronRedux.Address} <br />
							</span></li>
						</ul>
					</div>
					<div className="col-md-8">
						<h2>Hello There!</h2>
						<p>Young, enthusiastic and ownership driven full stack developer with a strong experience in banking and capital markets. Currently working as a Scrum Master and individual contributer in a fast paced agile environment for a 'equity options trading clearing house' product in Nasdaq. </p>
						<p> I have worn several hats like developer, tech lead, engineering manager and  solutions architect which shows that I am very agile and happy to fit in any role as long as I am learning :) </p>
						<p>
							<ul className="fh5co-social-icons">
								<li><a href="https://twitter.com/AjShukla07" target="_blank" rel="noreferrer"><i className="icon-twitter2"></i></a></li>
								<li><a href="https://www.linkedin.com/in/ajit-shukla-a36171171/" target="_blank" rel="noreferrer"><i className="icon-linkedin2"></i></a></li>
								<li><a href="https://github.com/ajz007" target="_blank" rel="noreferrer"><i className="icon-github2"></i></a></li>
							</ul>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}