import { useEffect, useState } from "react";

type SkillProps = {
    skills : string[];
}
export const Skills = ({skills}:SkillProps)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedIn(true);
        }, 2000)
    })
    return (
        <>
        <ul>
            {
                skills.map((skill)=>{
                    return (
                        <li key={skill}>{skill}</li>
                    )
                })
            }
        </ul>
        {
            isLoggedIn ? (
                <button>
                    start Learning
                </button>
            ) :
            <button onClick={()=>setIsLoggedIn(true)}>
                logIn
            </button>
        }
        </>
    )
}