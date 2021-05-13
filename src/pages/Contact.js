import React, {useState} from 'react';


const Enquiry = 1;
const Order = 2;


function Contact() {
    const [type, setType] = useState(Enquiry)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="flex justify-center bg-purple-700 w-full min-h-screen pt-20">
            <div className="w-full md:w-2/3">
                 <div className="mt-8 ml-8">
                    <h1 className="text-white font-bold text-2xl">Get In Touch</h1>
                    <p className="text-gray-300 text-lg w-3/5">
                        For questions, order or other enquiries please contact us with
                        the form bellow, we cant wait to here from you!
                    </p>
                </div>
                <div className="m-8">
                    <form action="https://api.web3forms.com/submit" method="POST" id="form">
                        <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE"/>
                        <input type="hidden" name="subject" value="New Submission from Web3Forms"/>
                        <input type="checkbox" name="botcheck" id="" style={{display: 'none'}}/>

                        <div className="flex flex-wrap mb-6 space-y-4">
                            <div className="mr-6">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm text-white dark:text-gray-400">
                                    Full Name
                                </label>
                                <input type="text"
                                       name="name"
                                       id="name"
                                       placeholder="John Doe"
                                       required
                                       className="w-64 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-800 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                            <div className="mr-6">
                                <label htmlFor="email"
                                       className="block mb-2 text-sm text-white dark:text-gray-400">
                                    Email
                                    Address
                                </label>
                                <input type="email"
                                       name="email"
                                       id="email"
                                       placeholder="you@company.com"
                                       required
                                       className="w-64 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-800 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6 space-y-4">
                            <div className="mr-6 flex flex-col">
                                <label htmlFor="phone" className="text-sm text-white dark:text-gray-400 mb-2">
                                    Phone Number
                                </label>
                                <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567"
                                       required
                                       className="w-64 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-800 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                            <div className="mr-6 flex flex-col">
                                <label htmlFor="enquiry" className="text-sm text-white dark:text-gray-400 mb-2">
                                    Enquiry Type
                                </label>
                                <input type="text" name="enquiry" id="enquiry" placeholder="Order request"
                                       required
                                       className="w-64 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm text-white dark:text-gray-400">
                                Your Message
                            </label>

                            <textarea rows="5"
                                      name="message"
                                      id="message"
                                      placeholder="Your Message"
                                      className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-800 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      required/>
                        </div>
                        <div className="mb-6">
                            <button type="submit"
                                    className="w-64 px-3 py-4 text-white bg-gray-900 rounded-md focus:bg-gray-700 focus:outline-none">
                                <span className="border-b-2 border-purple-700">Send Message</span>
                            </button>
                        </div>
                        <p className="text-base text-center text-gray-400" id="result">
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;