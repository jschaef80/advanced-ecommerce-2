import React from "react";
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";

function App(props) {

	const filtered = props.state.products.filter(product => {
		return product.category === props.currectCategory
	});

	return (
		<div className="App">
			<div className="wrap">
				<div className="header">


					<Header/>


					<div className="clear"> </div>


					<SubHeader/>


					<div className="clear"> </div>

					
					<TopNav changeCategory={props.changeCategory}/>
					

				</div>
				
			
				<ImageSlider/>
					

				<div className="content">
					<div className="products-box">

						<div className="products">
							<h5><span>FEATURED</span> PRODUCTS</h5>

							<div className="section group">
								{
									filtered.map((product, index) => {
										return (
											<ProductDetail key={index} product={product}/>
										)
									})
								}

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
