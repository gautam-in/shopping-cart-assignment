import React, { Suspense } from "react";

export function Loading(props) {
    return (
        <>
            <Suspense fallback={
                <div className="loading-wrapper">
                    Loading...
                </div>
            }>
                {props.children}
            </Suspense>
        </>
    );
};