import React from 'react'
import Text_Banner from './Text_Banner'
import Project from './Project'
import Project1 from './Project1'

const Portfolio = () => {
    return (
        <>
            <Text_Banner />

            <Project image={'https://mementostudio.netlify.app/images/person.jpeg'} />
            <Project1 />
            <Project image={'https://mementostudio.netlify.app/images/lightblock.jpeg'} />

        </>
    )
}

export default Portfolio