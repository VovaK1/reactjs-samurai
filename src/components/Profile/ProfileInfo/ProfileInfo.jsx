import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
        return (
            <div>
                {/*<div className={classes.background}>*/}
                {/*    <img alt="alt"*/}
                {/*         src="https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-and-clouds-shape_24972-1095.jpg?size=626&ext=jpg"/>*/}
                {/*</div>*/}
                <div className={classes.avatarBlock}>
                    <img alt="alt"
                         src={props.profile.photos.large || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU"}

                    />
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        )
}

export default ProfileInfo;
