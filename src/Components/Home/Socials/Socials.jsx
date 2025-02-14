import './Socials.css'
import { FaLinkedin, FaGithub } from  'react-icons/fa'    
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'

export default function Socials(){

    return(
        <div className='socialButtons'>
            <a target='_blank' href="https://www.linkedin.com/in/techvivekgupta/"><FaLinkedin /></a>
            <a target='_blank' href="https://github.com/vivekguptacoder"><FaGithub /></a>
            <a target='_blank' href="https://leetcode.com/u/vivekguptacoder/"><SiLeetcode /></a>
            <a target='_blank' href="https://www.geeksforgeeks.org/user/vivekgupwut5/ "><SiGeeksforgeeks /></a>
            
        </div>
    )
}