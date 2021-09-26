import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Persons.css'

const Persons = () => {
    const [persons, setPersons] = useState([]);

    const [cart, setCart] = useState([]);

    const handleAddPerson = (person) => {

        const newCart = [...cart, person]
        setCart(newCart);
    }





    useEffect(() => {
        fetch('./person.json')
            .then(res => res.json())
            .then(data => setPersons(data))

    }, []);


    return (
        <div className='spaceing'>
            <div className="row">
                <div className="col-lg-9">


                    <div className="row g-4">
                        {
                            persons.map(person => <Person
                                key={person._id}
                                person={person}
                                handleAddPerson={handleAddPerson}
                            > </Person>)

                        }


                    </div>
                </div>
                <div className="col-lg-3">

                    <Cart
                        cart={cart}>

                    </Cart>
                </div>
            </div>
        </div>
    );
};



export default Persons;