import React from 'react'
import html from '../../public/html.png'
import oracle from '../../public/oracle.png'
import javascript from '../../public/javascript.png'
import css from '../../public/css.jpg'
import java from '../../public/java.png'
import spring from '../../public/spring.png'
import springBoot from '../../public/springBoot.jpg'

function Experience() {
    const cardItems = [
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:oracle,
            name:"Oracle"
        },
        {
            id:3,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:4,
            logo:css,
            name:"CSS"
        },
        {
            id:5,
            logo:spring,
            name:"Spring"
        },
        {
            id:6,
            logo:springBoot,
            name:"SpringBoot"
        },
        {
            id:7,
            logo:java,
            name:"Java"
        }
    ]
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <p>I've more than 2 years of experience in below technologies.
        </p>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7 my-3'>
            {
                cardItems.map(({id,logo,name}) =>(
                    <div 
                    className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' 
                    key={id}>
                        <img src={logo} className='w-[150px] rounded-full' alt="logo"></img>
                        <div>
                            <div className=''>{name}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Experience
