import React from 'react'
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import SingleSocialcontact from './SingleSocialcontact';
const SocialContact = () => {
  return (
    <div className="flex mt-5 justify-between">
        <SingleSocialcontact name="github" link={'http://github.com/soumik7063/'} Icon = {<LuGithub/>}/>
        <SingleSocialcontact name="linkedin" link={'#'} Icon = {<CiLinkedin/>}/>
        <SingleSocialcontact name="instagram" link={'#'} Icon = {<FaInstagram/>}/>
    </div>
  )
}

export default SocialContact