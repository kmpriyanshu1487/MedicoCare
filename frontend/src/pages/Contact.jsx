import React, { useState } from 'react';
import 'boxicons';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    sendCopy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <div>
      <section className="mb-32">
        <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7001.543836550982!2d77.47862379999998!3d28.666547200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728070033078!5m2!1sen!2sin" 
    class="w-full h-full border-0"
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
        </div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-lg md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      name="name"
                      className="peer block w-full rounded border-2 bg-transparent py-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="email"
                      name="email"
                      className="peer block w-full rounded border-2 bg-transparent py-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative mb-6">
                    <textarea
                      name="message"
                      className="peer block w-full rounded border-2 bg-transparent py-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="mb-6 inline-block pl-[1.5rem]">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="sendCopy"
                      checked={formData.sendCopy}
                      onChange={handleInputChange}
                    />
                    <label className="hover:cursor-pointer" htmlFor="sendCopy">
                      Send me a copy of this message
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="mb-6 w-full rounded bg-primary text-white px-6 py-2 text-xs font-medium uppercase leading-normal"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-full lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary p-2 text-primary">
                        <box-icon name='support' color="white"></box-icon>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Technical support</p>
                        <p className="text-sm text-gray-500">kmpriyanshu741@gmail.com</p>
                        <p className="text-sm text-gray-500">9140884957</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary p-2 text-primary">
                          <box-icon  type='solid' color="white" name='location-plus'></box-icon>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Address</p>
                        <p className="text-sm text-gray-500">abcd, xyz</p>
                      </div>
                    </div>
                  </div>
                  <button className='border border-black px-8 py-4 text-sm'>Explore Jobs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
