import React from 'react';
import './Person.css'

const Person = (props) => {
    const { name, picture, age, gender, phone, rating, salary } = props.person;
    return (
        <div className="card-margin col-lg-4">
            <div className="card card-style h-100">
                <img src={picture} className=" mt-3 rounded-circle mx-auto d-block " alt="..." />
                <div class="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p class="card-text"><span className='fw-bold'>Age: </span>  {age}</p>
                    <p class="card-text"><span className='fw-bold'>Gender: </span> {gender}</p>
                    <p class="card-text"> <span className='fw-bold'>Phone: </span>{phone}</p>
                    <h5 class="card-text"> <span className='fw-bold'>Salary: $ </span> {salary} </h5>
                    <button
                        onClick={() => props.handleAddPerson(props.person)}
                        className="btn m-2"><i class="fas fa-shopping-cart"> </i> Hire Me</button>
                    <div className='d-flex justify-content-between margin'>

                        <div><p class="card-text"><i class="fab fa-facebook"></i> <i class="fab fa-instagram"></i></p></div>
                        <div><h6 class="card-text"> <i className="fas fa-heart"></i> <span className='fw-bold'>  {rating}</span></h6></div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Person;