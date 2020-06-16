import React from 'react';
import { PropTypes} from 'prop-types'
const proptypes = {
    id: PropTypes.string.required
}
const Dialog = (props)=>{
    const open = (id) => (e) => {
        e.preventDefault();

        // open modal specified by id
        let modal = JwModal.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: true });
        document.body.classList.add('modal-open');
    }
    return (
        <div className="model">
             <div className="modal-body">
                {props.children}
             </div>
             <div className="modal-background">
                  
             </div>
        </div>
    )
}

Dialog.proptypes = proptypes;
export default Dialog;