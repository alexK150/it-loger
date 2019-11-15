import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {updateLog} from "../../actions/logActions";
import M from 'materialize-css/dist/js/materialize.min';

const EditLogModal = ({current, updateLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current]);

    const onMessageSendHandler = (e) => {
        setMessage(e.target.value)
    };

    const onSelectHandler = (e) => {
        setTech(e.target.value)
    };

    const onAttentionHandler = (e) => {
        setAttention(!attention)
    };

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html: 'Please enter a message and tech'})
        } else {
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            };

            updateLog(updLog);
            M.toast({html: `Log updated by ${tech}`});

            //Clear Fields
            setMessage('');
            setTech('');
            setAttention(false)
        }
    };

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text"
                               name='message'
                               value={message}
                               onChange={onMessageSendHandler}/>
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

const mapStateToProps = state => ({
    current: state.log.current
});

export default connect(mapStateToProps, {updateLog})(EditLogModal);