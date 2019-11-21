import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTech} from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min';

const AddTechModal = ({addTech}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value)
    };

    const onLastNameChange = (e) => {
        setLastName(e.target.value)
    };

    const onSubmit =()=>{
        if (firstName === '' || lastName === ''){
            M.toast({html: 'Please enter the first and last name'})
        } else {
            addTech({
                firstName,
                lastName
            });

            M.toast({html: `${firstName} ${lastName} was added as a tech!`});

            //Clear Fields
            setFirstName('');
            setLastName('');
        }
    };

    return (
        <div id='add-tech-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text"
                               name='firstName'
                               value={firstName}
                               onChange={onFirstNameChange}/>
                        <label htmlFor="firstName"
                               className='active'>
                            First Name
                        </label>
                    </div>
                </div>
                {/*row*/}
                <div className="row">
                    <div className="input-field">
                        <input type="text"
                               name='lastName'
                               value={lastName}
                               onChange={onLastNameChange}/>
                        <label htmlFor="lastName"
                               className='active'>
                            Last Name
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!"
                   onClick={onSubmit}
                   className='modal-close waves-effect blue btn-light btn'>
                    Enter
                </a>
            </div>
        </div>
    )
};

const modalStyle = {
    width: '75%',
    height: '75%'
};

export default connect(null, {addTech}) (AddTechModal);