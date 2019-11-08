import React from 'react';

const LogItem = ({log}) => {

    return (
        <li className='collection-item'>
            <div>
                <a href="">{log.message}</a>
            </div>
        </li>
    )
}

export default LogItem;