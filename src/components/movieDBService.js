import React from "react";
import { require } from "react";




export default function MovieDBService() {
    let movies = require("../movieDB.json");

    return(movies);
}
