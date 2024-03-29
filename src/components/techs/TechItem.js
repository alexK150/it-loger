import React from 'react';
import {connect} from 'react-redux';
import {deleteTech} from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min';

const TechItem = ({tech: {id, firstName, lastName}, deleteTech}) => {

    const onDelete = () => {
        deleteTech(id);
        M.toast({html: 'Technician deleted'})
    };

    return (
        <li className='collection-item'>
            <div>
                {firstName} {lastName}
                <a href="#!" className='secondary-content' onClick={onDelete}>
                    <i className="material-icons gray-tex">delete</i>
                </a>
            </div>
        </li>
    )
};

export default connect(null, {deleteTech})(TechItem);