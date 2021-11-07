import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import About from "../../Components/About";
import Resume from "../../Components/Resume";
import Contact from "../../Components/Contact";
import Portfolio from "../../Components/Portfolio";
import React from "react";

interface MainProps {
    data: any
}
const Main = (props: MainProps) => {
    return (
        <div>
            <Header data={props.data.main} />
            <About data={props.data.main} />
            <Resume data={props.data.resume} />
            <Portfolio data={props.data.portfolio} />
            <Contact data={props.data.main} />
            <Footer data={props.data.main} />
        </div>
    )
}

export default Main