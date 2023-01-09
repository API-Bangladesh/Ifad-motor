import React from 'react';
import './WelcomeCss.scss';
import { Link } from 'react-router-dom';

export const WelcomePage = () => {
	return (
		<>
			{/* <!-- welcome start here --> */}
			<div className="welcome">
				<div className="logoBar">
					<img src="https://i.postimg.cc/C5HqBtyZ/IFADMotors-Logo.png" alt="logo" />
				</div>
				<div className="websiteLink">
					<div className="row align-items-center">
						<div className="col-md-6 col-lg-6">
							<div className="item1">
								<img
									className="tayerImg"
									src="https://i.postimg.cc/QdMTC0ft/tayer-bg.png"
									alt="img"
								/>
								<div className="logoAndBtn">
									<img className="apolloLogo" src="https://i.postimg.cc/ZnhNqmQt/apollo-Logo.png" alt="img" />
									<p className="mt-3 mt-md-5">
										<Link className="goBtn" target="_blank" to="#">
											<svg width="75" height="14" viewbox="0 0 75 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M64.5 0.910837L74.0687 7L64.5 13.0892V0.910837Z" stroke="#3F017A" />
												<line x1="64" y1="7.5" y2="7.5" stroke="#3F017A" />
											</svg>
										</Link>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6">
							<div className="item2">
								<img className="motorcycleImg" src="https://i.postimg.cc/qMwKp9XS/motorcycle-bg.png" alt="img" />
								<div className="logoAndBtn">
									<img className="royalLogo" src="https://i.postimg.cc/MKqR2WR1/royal-Logo.png" alt="img" />
									<p className="mt-3 mt-md-5">
										<Link className="goBtn exColor" target="_blank" to="#">
											<svg width="75" height="14" viewbox="0 0 75 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M64.5 0.910837L74.0687 7L64.5 13.0892V0.910837Z" stroke="#EE3235" />
												<line x1="64" y1="7.5" y2="7.5" stroke="#EE3235" />
											</svg>
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- welcome start here --> */}

			{/* <!-- footer start here --> */}
			<footer className="footer">
				<div className="container">
					<div className="footerItem">
						<img className="footerLogo" src="https://i.postimg.cc/7Pg7WCCx/IFADGroup-Logo.png" alt="img" />
					</div>
				</div>

				<div className="copy">
					<div className="container">
						{/* <!-- <div className="row"> --> */}
						<div className="copyRight">
							<span>
								Copyright © 2022 | Powered by
								<a target="_blank" href="https://api.net.bd/">
									<img className="APIlogo" src="https://i.postimg.cc/sDgYGjXs/API-logo.png" alt="img" />
								</a>
							</span>
							<span className="condition">
								<span>Terms of use</span>
								<a target="_blank" href="#">
									Privacy policy
								</a>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
