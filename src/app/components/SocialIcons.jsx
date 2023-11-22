import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";
import { MdAddIcCall } from "react-icons/md";


export default function SocialIcons() {
  return (
    <aside className="flex gap-4">
        <BsLinkedin />
        <BsGithub />
        
        <FaSquareInstagram  />

        <Link href='mailto:francenemuo@gmail.com'>
            <BiLogoGmail />
        </Link>
        
        <Link href='tel:+2348100144840'>
            <MdAddIcCall />
        </Link>

       
    </aside>
  )
}
