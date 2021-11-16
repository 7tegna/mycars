import React from "react";

function Car({car}){
    return(
        <div>
            {car.map((car) =>{
                const {id, make, model, year, image }  = car;
                return (
            <article key={id} className="car">
                <img src={image} alt= {make}></img>
                <p>Make: {make} </p>
                <p>Model: {model}</p>
                <p>Year: {year}</p>
            </article>
        );
    })}  
    </div>
    );
}
export default Car;