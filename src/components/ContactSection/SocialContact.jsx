import React from 'react'
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import SingleSocialcontact from './SingleSocialcontact';
const SocialContact = () => {
  return (
    <div className="flex mt-5 justify-between">
        <SingleSocialcontact link={'#'} Icon = {<LuGithub/>}/>
        <SingleSocialcontact link={'#'} Icon = {<CiLinkedin/>}/>
        <SingleSocialcontact link={'#'} Icon = {<FaInstagram/>}/>
    </div>
  )
}

export default SocialContact