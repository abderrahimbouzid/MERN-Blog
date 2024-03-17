import { Footer, FooterTitle } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram , BsTwitter , BsLinkedin} from 'react-icons/bs'


export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
         <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full mt-4 justify-between sm:flex md:grid-cols-1 '>
                <div className='mt-4'>
                   <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-300 rounded-lg text-white '>Developr0101's</span>
                      Blog
                   </Link>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4 sm:mt-4 sm:grid-cols-3 sm:gap-4">
                    <div>


                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                         <Footer.Link
                         href='https://www.zdnet.com/article/my-5-favorite-ai-tools-for-work/'
                         target='_blank'
                         rel='noopener noreferrer'
                         >
                         AI tools

                         </Footer.Link>
                         <Footer.Link
                         href='https://www.flowbite-react.com/docs/components/footer'
                         target='_blank'
                         rel='noopener no referrer'
                         >
                         Learn Flowbite

                         </Footer.Link>
                    
                    </Footer.LinkGroup>
                    </div>
                    <div>


                    <Footer.Title title='Flow Us'/>
                    <Footer.LinkGroup col>
                         <Footer.Link
                         href='https://github.com/abderrahimbouzid'
                         target='_blank'
                         rel='noopener noreferrer'
                         >
                         Github

                         </Footer.Link>
                         <Footer.Link
                         href='https://www.instagram.com/developer0101'
                         target='_blank'
                         rel='noopener no referrer'
                         >
                         Instagram

                         </Footer.Link>
                    
                    </Footer.LinkGroup>
                    </div>
                    <div>


                    <Footer.Title title='LEGAL'/>
                    <Footer.LinkGroup col>
                         <Footer.Link
                         href='https://www.zdnet.com/article/my-5-favorite-ai-tools-for-work/'
                         
                         >
                         Prevacy Policy

                         </Footer.Link>
                         <Footer.Link
                         href='#'
                        
                         >
                         Term &amp; Conditions

                         </Footer.Link>
                    
                    </Footer.LinkGroup>
                    </div>

                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:itms-center sm:justify-between'>
               <Footer.Copyright href='#' by='Developer0101' year={new Date().getFullYear()} />
            <div className='flex flex-row gap-5 sm:mt-4 mt-4  sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsInstagram} />
                <Footer.Icon href='#' icon={BsTwitter} />
                <Footer.Icon href='#' icon={BsLinkedin} />
            </div>
            </div>
         </div>
    </Footer>
  )
}
