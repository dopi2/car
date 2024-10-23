/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Typography, Input } from "@material-tailwind/react";
import "./caro.css"
export function ComingSoon1() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="grid h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('https://getwallpapers.com/wallpaper/full/7/8/9/912365-vintage-car-wallpaper-1920x1080-for-1080p.jpg')]">
      <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center">
        <div className="my-auto text-center">
          <Typography
            variant="h2"
            color="white"
            className="lg:!text-4xl !text-3xl hope"
          >
            Get Ready for Something Amazing!
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 mt-4 mx-auto text-gray-400 w-full lg:max-w-3xl hope"
          >
            We&apos;re excited to introduce our latest innovation that will
            change the way you develop. Stay tuned as we put the finishing
            touches on this game-changing product.
          </Typography>
          <Typography
            variant="lead"
            className="font-bold text-gray-400 mb-6 hope"
          >
            Email us now to be the first to know when we launch
          </Typography>
          <div className="flex flex-col md:flex-row gap-4 items-center max-w-md mx-auto">
            <Input color="white" label="Your Email" className="w-full" />
            <Button color="red" className="w-full md:max-w-fit hope">
              notify me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon1;