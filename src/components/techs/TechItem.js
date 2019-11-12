import React from 'react';

const TechItem = ({tech}) => {
    return (
        <li className='collection-item'>
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className='secondary-content'>
                    <i className="material-icons gray-tex">delete</i>
                </a>
            </div>
        </li>
    )
}

export default TechItem;