import React from 'react';
import './Card.css';

const Card = ({name,email,id}) => {
	return(
		<div className='card' >
			<img alt='robot' src={`https://robohash.org/${id}?200x200`} /> 
			<div>
				<h2>{name}</h2>

				<p> {email} </p>
			</div>
		</div>
	);
}
export default Card;