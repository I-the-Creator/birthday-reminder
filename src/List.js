import React from 'react';


const List = ({ people }) => {  /* destructure function parameter, looking for and getting people prop from App  */
    return (
        <>
            {people.map((person)=>{  /* iterate on people prop (array got from App - data) */
                const {id, name, age, image} = person;  // destructure params of person 
                return <article key={id} className="person">
                    <img src={image} alt={name}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </article>
            })}
        </>
    );
};

export default List;
