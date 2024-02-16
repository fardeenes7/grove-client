"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

const Providers = ({ children }) => {
    return (
        <>
            {children}
            <Next13ProgressBar
                height="6px"
                color="#011429"
                options={{ showSpinner: true }}
                showOnShallow
            />
        </>
    );
};

export default Providers;
