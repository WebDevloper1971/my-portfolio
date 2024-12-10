import ecomm from "./images/ecomm.png";
import voutube from "./images/yt.png";
import ecoblog from "./images/ecoblog.png";

export interface Project {
  title: string;
  link: string;
  description: string;
  image: string;
}

export const ProjectData: Project[] = [
  {
    title: "Velet",
    link: "https://ecommerce-next-js-mauve-rho.vercel.app/",
    description:
      "Velet an online watchstore platform crafted with NextJs Framework, Tailwind CSS, DaisyUI, and Prisma ORM, featuring seamless OAuth for secure, user-friendly authentication.",
    image: ecomm,
  },
  {
    title: "Eco Blog",
    link: "https://eco-blog-react-frontend.vercel.app/",
    description:
      "Eco Blog is developed to make people aware of current condition of our enviorenment and to discuss solution on how to fix it, It mainly focuses on providing people easy to do solutions on an individual level. Let's make a our earth happy.",
    image: ecoblog,
  },
  {
    title: "Voutube",
    link: "https://github.com/WebDevloper1971/algorithm-visualiser",
    description:
      "Voutube a simple redesign of Youtube - video streaming platform for a smoother, more intuitive user experience having a sleek, modern design for seamless viewing. Integrated with Youtube API Version 3 for getting real time data.",
    image: voutube,
  },
];
