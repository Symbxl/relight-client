import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { MdOutlinePattern } from "react-icons/md";
import { PiCirclesThreeDuotone } from "react-icons/pi";
import { MdPhoneIphone } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaHammer } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";


import styles from "../page.module.css";


export default function Card() {
  const data = [
    { id: 1, icon: <VisibilityOffIcon />, title: "Discreet from the street. ", description: "Installed under eaves and behind trim, JellyFish Lighting blends with a matching track color. Wires are enclosed in this track with attic jumps and no exterior power supplies, ensuring a nearly invisible look from the street." },
    { id: 2, icon: <AppShortcutIcon />, title: "Customize your lighting to perfection", description: "Command each light individually, effortlessly curating the perfect ambiance for your home. Precisely design colors, including a myriad of whites, to create a personalized, sophisticated atmosphere." },
    { id: 3, icon: <MdOutlinePattern />, title: "Get creative with patterns.", description: "Select from over 16 million colors, crafting dynamic patterns with 20 unique movements and effects. Choose from 102 preset patterns inspired by customer recommendations for a mesmerizing lighting experience." },
    { id: 4, icon: <PiCirclesThreeDuotone />, title: "Introducing zoning", description: "Redefine your space with the ability to selectively illuminate specific sections. Whether it's the front or back of your home, control each section independently, transforming your environment with distinct lighting schemes." },
    { id: 5, icon: <MdPhoneIphone />, title: "An app built for your smart home.", description: "Integrate your JellyFish app with Alexa, Google Home, and Control4, putting control in your hands from anywhere. Tailor your lighting experience to work with the systems you already know." },
    { id: 6, icon: <SlCalender />, title: "Your schedule, perfectly timed.", description: "Save nightly, weekly, holiday, and special event schedules effortlessly, allowing your Jellyfish Lighting to adapt to your lifestyle." },
    { id: 7, icon: <FaHammer />, title: "Powered by quality.", description: "Our lighting manufactures and develops our patented lights and app in-house to ensure the highest quality product." },
    { id: 8, icon: <LuLeaf />, title: "Bright & energy efficient.", description: "Using less than one watt per light at the brightest white and fully dimmable, experience brightness without compromising on energy efficiency." },
  ]
  return (
    <div className={styles.grid}>
      {data.map(result => {
        return (
          <div key={result.id} className={styles.card}>
            <h2>
              {result.icon} &nbsp; {result.title}
            </h2>
            <p>{result.description}</p>
          </div>
        )
      })}
    </div>
  )
}