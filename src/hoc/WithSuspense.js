import React, {Suspense} from 'react';
import Preloader from "../components/common/Preloader/Preloader";

function WithSuspense(Component) {
    return (props) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props} />
            </Suspense>
        )
    }
}

export default WithSuspense;
