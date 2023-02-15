import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle]= useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })    
    let myStyle = {
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
        border: '1px solid',
        borderColor: props.mode==='dark'?'white':'#042743'
    }
    
  return (
        <div className='container' >
            <h1 className='my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Analyze Your Text</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils give you a way to analyze your text quickly and efficiently. Be it word count , Character count or 
                        </div>
                        </div>
                </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free To Use</strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        “Should my app be free or paid?”

                            Given the current economic climate and ongoing air of uncertainty, you may be wondering if offering your app for free is a good way to increase your user base and give your business greater resilience. 

                            And with major mobile brands like Headspace, HBO Max, and UberEats offering their services for free, you might be curious if you should follow suit.*

                            But switching up your monetization model is no small task. How do you know if this is the right play for your brand? How will choosing a freemium model impact your user growth? How difficult will it be to generate revenue with a free app?
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Browser Compatible</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                                Android’s biggest strength is its app ecosystem. There are a digital ton of Android apps. People downloaded them billions of times. Some of them cost money, and some of them don’t. Usually, the best apps will cost you a few bucks. However, there are plenty of amazing options that don’t cost you anything. These services are usually supported by advertising, sponsorship of some sort, or something else.

                                However, there are still some truly excellent apps out there that you can use for free. After all, good functionality shouldn’t always involve spending money. These are the best free Android apps for Android as of right now.
                        </div>
                        </div>
                    </div>
            </div>
            
        </div>
  )
}
