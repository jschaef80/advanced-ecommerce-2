import React from "react";
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";

function App(props) {
	return (
		<div className="App">
			<div className="wrap">
				<div className="header">


					<Header/>


					<div className="clear"> </div>


					<SubHeader/>


					<div className="clear"> </div>

					
					<TopNav/>

				</div>
				
			
				<ImageSlider/>
					

				<div className="content">
					<div className="products-box">

						<div className="products">
							<h5><span>FEATURED</span> PRODUCTS</h5>

							<ProductDetail/>
							
						</div>

						<div className="products products-secondbox">
							<h5><span>Our</span> Specials</h5>
							<div className="section group">

								<div className="grid_1_of_5 images_1_of_5">
									<img src="images/g1.jpg" />
									<h3>Lorem Ipsum is simply </h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
									<h4><span>$600.00</span>$512.00</h4>
									<div className="button"><span><a href="singlepage.html">Read More</a></span></div>
								</div>

								<div className="grid_1_of_5 images_1_of_5">
										<img src="images/g6.jpg" />
										<h3>Lorem Ipsum is simply </h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
									<h4><span>$400.00</span>$352.00</h4>
									<div className="button"><span><a href="singlepage.html">Read More</a></span></div>
								</div>

								<div className="grid_1_of_5 images_1_of_5">
									<img src="images/g7.png" />
										<h3>Lorem Ipsum is simply </h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
										<h4><span>$300.00</span>$202.00</h4>
											<div className="button"><span><a href="singlepage.html">Read More</a></span></div>
								</div>

								<div className="grid_1_of_5 images_1_of_5">
										<img src="images/g8.png" />
										<h3>Lorem Ipsum is simply </h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
										<h4><span>$400.00</span>$322.00</h4>
											<div className="button"><span><a href="singlepage.html">Read More</a></span></div>
								</div>

								<div className="grid_1_of_5 images_1_of_5">
										<img src="images/g1.jpg" />
										<h3>Lorem Ipsum is simply</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
										<h4><span>$700.00</span>$602.00</h4>
											<div className="button"><span><a href="singlepage.html">Read More</a></span></div>
								</div>

							</div>
						</div>
					</div>
				</div>


				<div className="clear"> </div>


				<Footer/>


			</div>

		</div>
	);
}

export default App;
