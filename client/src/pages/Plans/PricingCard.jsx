import React from "react";

import "./Plans.css";

function CardDescription({ title, description }) {	
	return (
		<div className="card-description">
			<h2>{ title }</h2>
			<p>{ description }</p>
		</div>
	);
};

function CardBilling({ price }) {
	return (
		<div className="card-billing">
			<p>
				<strong className="price">₹ { price }</strong>
        <strong> / mo.</strong>
			</p>
			<p>
				{/* <span className="recurrency">
					Billed ₹{price}/monthly
				</span> */}
			</p>
		</div>
	);
};

function CardFeatures({ data }) {	
	return (
		<div className="card-features">
			<ul>
				{ 
					data.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})
				}
			</ul>
		</div>
	);
};

function CardAction(props) {
	
	const KEY = "pk_test_51NNaT8SG9dy5kRcNmkOhozXFohBFxsFavHC6MyiSWMnWCUFx9R50vW8gzqAKzNKO0BPRk7gBNzdYNNwBTRyJcfnq00Y0RkyDWc"
    // .toString().substring(0, 107);

	return (
		props.type === "basic" ? 
		<stripe-buy-button
			buy-button-id={"price_1NNsKgSG9dy5kRcNKsMUE50Y"
                // .toString().substring(0, 32)
            }
			publishable-key={KEY}
		>
		</stripe-buy-button> :
		<stripe-buy-button
			buy-button-id={"price_1NNse4SG9dy5kRcNug0gFDtX"
                // .toString().substring(0, 32)
            }
			publishable-key={KEY}
		>
		</stripe-buy-button>	
	);
};

function PricingCard(props) {	
    const { 
      type,
      title,
      description,
      price,
      mostPopular,
      data,
    } = props;
    
    return (
      <div className={`card pricing-card ${type}`}>
        { (mostPopular) ? <span className="most-popular">Most Popular</span> : null }
			<CardDescription title={title} description={description} />
			<CardBilling price={price} />
			<CardFeatures data={data} />
			<CardAction type={type} description={description} price={price} />
			
			<button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }}
> Click here</button>
      </div>
    );
};

export default PricingCard;