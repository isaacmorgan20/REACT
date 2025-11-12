import React, {Component} from 'react'
import Image from './Image'
import Title from './Title'
import Description from './Description'

 class SimpleCard extends Component{
render(){
    return(
    <div className='flex mt-40 w-170 shadow-2xl bg-blue-600 ml-70 rounded-lg'>
        <div>
            <Image />
        </div>
        <div className='w-full'>
             <Title text="This is the guitar" />
            <Description text="The guitar is a stringed musical instrument that is usually fretted (with some exceptions) and typically has six or twelve strings. "/>
       
        </div>
        
    </div>
    )
}
}
export default SimpleCard
 

