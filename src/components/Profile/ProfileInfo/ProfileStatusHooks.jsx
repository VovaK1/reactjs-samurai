import React, {useState} from "react";

const ProfileStatusHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        props.updateStatus(status);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }


    return (
            <div>
                {

                    editMode ?
                        <div>
                            <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}/>
                        </div>
                        :
                        <div>
                            <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
                        </div>
                }
            </div>
        )
}

export default ProfileStatusHooks;
