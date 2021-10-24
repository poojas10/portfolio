import React from 'react'
import { skills } from '../skills'
export default function SkillsSection() {
    return (
        <section  className='skill-section row description container-fluid'>
            <h1 className="main-heading">Skills & Tools</h1>
           {/* <div className="row"> */}
           {skills.map((skill,i)=>{
               const {name,imgUrl,alt}=skill
                return <div  key={i} className='col-lg-3 col-md-6 col-sm-6 col-6 card'>
                  <img className='icon' src={imgUrl} alt={alt} />
                  <p className='skill-name content'>{name}</p>
                </div>
            })}
           {/* </div> */}
        </section>
    )
}
