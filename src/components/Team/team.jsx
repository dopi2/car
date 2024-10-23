/* eslint-disable react/prop-types */
import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
  
  import "./team.css"
  function TeamCard({ img, name, title }) {
    return (
      <Card className="rounded-lg bg-[#CDBD72]" shadow={false}>
        <CardBody className="text-center">
          <Avatar
            src={img}
            alt={name}
            variant="circular"
            size="xxl"
            className="mx-auto mb-6 object-top"
          />
          <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
            {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-gray-600"
          >
            {title}
          </Typography>
          <div className="flex items-center justify-center gap-1.5">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-dribbble text-lg" />
            </IconButton>
          </div>
        </CardBody>
      </Card>
    );
  }
  
  
  const members = [
    {
      img: `https://www.material-tailwind.com/img/avatar1.jpg`,
      name: "Ryan Samuel",
      title: "Co-Founder",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar2.jpg`,
      name: "Ryan Samuel",
      title: "Co-Founder",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar5.jpg`,
      name: "Nora Hazel",
      title: "UI/UX Designer",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar4.jpg`,
      name: "Otto Gonzalez",
      title: "Marketing Specialist",
    },
  ];
  
  export function TeamSection12() {
    return (
      <section className="min-h-screen py-8 px-8 lg:py-28 happy">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-28">
          <Typography
            variant="h6"
            color="white"
            className="text-lg work2"
          >
            Meet the Team
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="my-2 !text-2xl lg:!text-4xl work"
          >
            Behind the Success: Our Dedicated Team
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-white max-w-4xl work"
          >
            From visionary leadership to creative talent, and technical wizards, 
            each team member plays a pivotal role in delivering the exceptional 
            service and innovative solutions.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
    );
  }
  
  export default TeamSection12;