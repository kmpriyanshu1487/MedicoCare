import React from 'react';
import assets_logo from '../assets/logo/logo11.png';

const Footer = () => {
    return (
        <div className="md:mx-10 bg-gray-300">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 p-20 text-sm">
                {/* Company Information Section */}
                <div>
                    <img className="mb-5 w-40" src={assets_logo} alt="Company Logo" />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsum minus laudantium exercitationem, dolores provident esse. Accusantium quia modi hic, libero sequi consectetur doloremque ipsam.
                    </p>
                </div>

                {/* Company Links Section */}
                <div>
                    <p className="text-xl font-medium mb-5">Company</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div>
                    <p className="text-xl font-medium mb-5">Get in Touch</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>9140884957</li>
                        <li>kmpriyanshu9009@gmail.com</li>
                    </ul>
                </div>

                {/* Social Media Links Section */}
                <div>
                    <p className="text-xl font-medium mb-5">Follow Us</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </div>

                {/* Google Map Section */}
                <div className="w-full">
                    <p className="text-xl font-medium mb-5">Visit Us</p>
                    <div className="w-full h-90"> {/* Adjusted the height and container width */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28007.345131443824!2d77.4832128!3d28.662169600000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1733675795731!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div>
                <hr />
                <p className="py-5 text-sm text-center">
                    Copyright 2024@ MedicoCare - All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
