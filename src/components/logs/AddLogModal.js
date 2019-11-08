import React, {useState} from 'react';

const AddLogModal = (props) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onMessageSendHandler = (e) => {
        setMessage(e.target.value)
    }

    const onSelectHandler = (e) => {
        setTech(e.target.value)
    }

    const onAttentionHandler = (e) => {
        setAttention(!attention)
    }

    const onSubmit =()=>{
        console.log(message, tech, attention)
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text"
                               name='message'
                               value={message}
                               onChange={onMessageSendHandler}/>
                        <label htmlFor="message"
                               className='active'>
                            Log Message
                        </label>
                    </div>
                </div>
                {/*row*/}
                <div className='row'>
                    <div className='input-field'>
                        <select name="tech"
                                value={tech}
                                className='browser-default'
                                onChange={onSelectHandler}>
                            <option value="" disabled>
                                Select Technician
                            </option>
                            <option value="Will Smith">Will Smith</option>
                            <option value="Sam Larson">Sam Larson</option>
                            <option value="Barak Obama">Barak Obama</option>
                        </select>
                    </div>
                </div>
                {/*row*/}
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox"
                                       className='filled-in'
                                       checked={attention}
                                       value={attention}
                                       onChange={onAttentionHandler}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!"
                   onClick={onSubmit}
                   className='modal-close waves-effect waves-green btn-flat'>
                    Enter
                </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddLogModal;