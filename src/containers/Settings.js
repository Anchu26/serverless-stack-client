/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { onError } from "../libs/errorLib";
import config from "../config";
export default function Settings() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    function billUser(details) {
        return API.post("notes", "/billing", {
            body: details
        });
    }
    return (
        <div className="Settings">
        </div>
    );
}