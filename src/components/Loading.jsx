import React, { Suspense } from "react";

export function Loading(props) {
    return (
        <>
            <Suspense fallback={
                <div>
                    Loading...
                </div>
            }>
                {props.children}
            </Suspense>
        </>
    );
};