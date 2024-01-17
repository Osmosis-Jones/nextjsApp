import React from 'react'
import Clients from './Clients'

const Work = () => {
    return (
        <div className='flex px-16'>
            <Clients image={'https://mementostudio.netlify.app/images/artroom.jpeg'} title={'Florentine Institute'} description={'Jay and Lucy laid the foundation for modern art that are unprecedented. With an inspiration to bring "Florentine" unique methodologies to a modern audience, the Florentine Institute enlisted Memento to co-create a digital platform to unveil their vast collection to the world.'} />
            <Clients image={'https://mementostudio.netlify.app/images/bakery.jpeg'} title={'Kyouka Bakery'} description={'Kyouka Bakery is on a path to becoming one of the most popular bakeries in Japan. To encapsulate customers in scrumptious baked goods and cosy atmosphere, we helped Kyouka Bakery to capture that exact experience to their customers.'} />
        </div>
    )
}

export default Work