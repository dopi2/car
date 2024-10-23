import {  Card, CardBody, Typography } from "@material-tailwind/react";
import "./step2.css"
import Med from "../assets/ba627e136720fc94a5158d3312ad3b82-removebg-preview.png"
import Roll from "../assets/roll.png"
import Jag from "../assets/jaguar-car-logo-500x500-removebg-preview.png"
import Pop from "../assets/Meaningful-Car-Logos-K-14-10-1024x640-removebg-preview.png"
import Bmw from "../assets/car-logos-bmw-removebg-preview.png"
export function LogoSection6() {
  return (
    <section className="py-8 px-8 lg:py-20 hold">
      <div className="container !mx-auto text-center place-content-center grid">
        <Typography
          color="blue-gray"
          variant="lead"
          className="!font-semibold lg:!text-lg !text-base glad"
        >
          More than 50+ brands trust us
        </Typography>
        <Typography
          variant="h1"
          className="my-4 !text-2xl !leading-snug lg:!text-3xl glad2"
        >
          Trusted by Leading Brands
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-5xl lg:px-8 mb-10 glad3"
        >
          From innovative startups to Fortune 500 companies, our client list spans a spectrum of 
          sectors, each with unique challenges that we&apos;ve successfully navigated.
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#000] px-10 dam">
              <CardBody>
                <img
                  src={Med}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500 cap">
                 Mercedes
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#2c2a2a] px-10 dam2">
              <CardBody>
                <img
                  src={Roll}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500 cap2">
                  Rolls Royce
                </Typography>
              </CardBody>
            </Card>
          </div>
          <Card shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg dam3">
            <CardBody className="text-center">
              <img
                src={Jag}
                alt="logo"
                className="w-40 mx-auto"
              />
              <Typography variant="small" className="font-normal text-gray-500 mb-4 cap3">
              Jaguar
              </Typography>
              <Typography variant="small" color="white" className="font-normal lg:max-w-[16rem] hold3">
              &quot;Whether you’re a passionate collector, a restoration enthusiast, or simply a lover of nostalgia, we provide a treasure trove of resources, including expert guides, market insights, and a vibrant community.&quot;
              </Typography>
            </CardBody>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
          <Card shadow={false} className="bg-[#FAFAFA] px-10 dam4">
              <CardBody>
                <img
                  src={Pop}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500 cap4">
                  Porsche
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10 dam5">
              <CardBody>
                <img
                  src={Bmw}
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500 cap5">
                  BMW
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      {/* <Button className="mt-6 mx-auto flex" variant="outlined">see all projects</Button> */}
    </section>
  );
}

export default LogoSection6;