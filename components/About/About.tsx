import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = (props: any) => {
  if (!props.data) return null;

  const name = props.data.name;
  const profilepic = 'images/' + props.data.image;
  const bio = props.data.bio;
  // const street = props.data.address.street;
  // const city = props.data.address.city;
  // const state = props.data.address.state;
  // const zip = props.data.address.zip;
  const phone = props.data.phone;
  const email = props.data.email;
  const summaryInfoDownload = props.data.summaryInfodownload;

  return (
    <section id="about">
      <Fade duration={1000}>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          {/*<Pricing PackageTitle={"Independent"} Price={"$400/mo"}></Pricing>*/}
          {/*<Pricing PackageTitle={"Small Business"} Price={"$750/mo"}></Pricing>*/}
          {/*<Pricing PackageTitle={"Storefront"} Price={"$2500/mo"}></Pricing>*/}
          {/*<Pricing PackageTitle={"Enterprise"} Price={"Contact for information"}></Pricing>*/}
        </div>


      </Fade>
    </section>
  )
}

export default About;
