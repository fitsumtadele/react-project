function Modal(props) {

    return (<div className='modal'>
        <p>are you sure?</p>
        <button className='btn btn--alt' onClick={props.onCancle}>cancel</button>
        <button className='btn'onClick={props.onConfirm}>confirm</button>
    </div>);
}

export default Modal;