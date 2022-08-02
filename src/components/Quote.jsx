import React from 'react'
import Nav from './Nav'
import QuoteForm from './QuoteFormComponents/QuoteForm'
import PhoneSolid from './icons/phone-solid.svg'
import MailSolid from './icons/mail-solid.svg'

export default function Quote() {
    return (
        <div className="h-screen overflow-hidden">
            <Nav />
            <div className="h-full relative">
                <div className="w-1/2 h-full bg-orange">
                    <div className="ml-24 pt-32">
                        <h1 className="text-5xl pb-6">Get a quote instantly!</h1>
                        <h2 className="text-2xl">
                            Simply fill in the form and get a quote within seconds
                        </h2>
                    </div>
                    <div className="ml-24 pt-16 grid grid-rows-2 gap-y-12">
                        <h3 className="text-xl">
                            If you require a more personalised quote simply call or email
                        </h3>
                        <div className="flex">
                            <img src={`${PhoneSolid}`} alt="phone icon" className="h-7 w-auto" />
                            <p className="pl-4 text-lg">1300 362 085</p>
                        </div>
                        <div className="flex">
                            <img src={`${MailSolid}`} alt="mail icon" className="h-7 w-auto" />
                            <p className="pl-4 text-lg">smb@smbaustralia.com.au</p>
                        </div>
                    </div>
                </div>
                <div className="quoteContainer absolute w-[40%] top-[15%] left-[55%] bg-white rounded-2xl shadow-2xl">
                    <QuoteForm />
                </div>
            </div>
        </div>
    )
}
