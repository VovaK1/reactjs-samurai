import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

        return (
            <div>
                {/*<div className={classes.background}>*/}
                {/*    <img alt="alt"*/}
                {/*         src="https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-and-clouds-shape_24972-1095.jpg?size=626&ext=jpg"/>*/}
                {/*</div>*/}
                <div className={classes.avatarBlock}>
                    <img alt="alt"
                         src={profile.photos.large || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU"}

                    />
                    {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
                    <ProfileStatusHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
        )
}

export default ProfileInfo;
