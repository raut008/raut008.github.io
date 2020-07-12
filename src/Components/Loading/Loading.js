import React from 'react'
import { LoadingStyle, ProgressBar } from "./Loading.style";

const Loading = () => {
    return (
        <LoadingStyle>
            <h6 className="m-0">Retry</h6>
            <ProgressBar></ProgressBar>
        </LoadingStyle>
    )
}

export default Loading
