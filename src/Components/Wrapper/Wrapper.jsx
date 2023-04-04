import React from 'react'
import Banner from "../Banner/Banner";
import Readey from "../Readey/Readey";
import Cards from "../Cards/Cards";
import Upload from "../Upload/Upload";
import Updates from "../Updates/Updates";

export default function Wrapper({CardDas}) {
    return (
        <div>
            <Banner />
            <Readey />
            <Cards CardDas={CardDas} />
            <Upload />
            <Updates />
        </div>
    )
}
