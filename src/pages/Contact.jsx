import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Get In Touch
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-green-700">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                  placeholder="Tell us more about your inquiry..."></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-green-700">
              Visit Our Farm
            </h3>

            <div className="bg-white p-6 rounded-xl shadow-md mb-8 space-y-6">
              <ContactItem
                icon="fas fa-map-marker-alt"
                title="Farm Location"
                text="123 Rural Route, Green Valley, CA 95123"
              />
              <ContactItem
                icon="fas fa-phone-alt"
                title="Phone"
                text="(555) 123-4567"
              />
              <ContactItem
                icon="fas fa-envelope"
                title="Email"
                text="info@greenvalleyfarm.com"
              />
              <ContactItem
                icon="fas fa-clock"
                title="Farm Store Hours"
                text={
                  <>
                    <p>Tuesday - Sunday: 9:00 AM - 5:00 PM</p>
                    <p>Monday: Closed</p>
                  </>
                }
              />
            </div>

            {/* Map */}
            <div className="h-80 bg-gray-200 rounded-xl overflow-hidden shadow-md">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://readdy.ai/api/search-image?query=Aerial%20view%20of%20a%20beautiful%20organic%20farm%20with%20various%20crop%20fields%20in%20different%20colors%2C%20showing%20neat%20rows%20of%20vegetables%2C%20orchards%2C%20farm%20buildings%2C%20and%20surrounding%20countryside%20with%20roads%20leading%20to%20the%20property%2C%20captured%20in%20bright%20daylight&width=800&height=400&seq=12&orientation=landscape')",
                }}></div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium text-green-800 mb-2">
                Connect With Us
              </h4>
              <div className="flex space-x-4 text-xl text-gray-600">
                <a href="#" className="hover:text-green-600 transition">
                  <FaFacebook className="fab fa-facebook-square text-blue-600" />
                </a>
                <a href="#" className="hover:text-red-600 transition">
                  <FaInstagram className="fab fa-instagram text-red-500" />
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                  <FaXTwitter className="fab fa-twitter text-blue-400" />
                </a>
                <a href="#" className="hover:text-red-600 transition">
                  <FaYoutube className="fab fa-youtube text-red-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Do I need to make a reservation?
                </h3>
                <p className="text-gray-600">
                  Reservations are recommended for tours and group visits, but
                  walk-ins are welcome at our farm store during regular hours.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Are pets allowed on the farm?
                </h3>
                <p className="text-gray-600">
                  We love animals, but for the safety of our livestock and your
                  pets, we ask that you leave pets at home during farm visits.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept cash, credit cards, debit cards, and SNAP/EBT
                  benefits. We also offer farm credit accounts for regular
                  customers.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Is the farm wheelchair accessible?
                </h3>
                <p className="text-gray-600">
                  Yes! Our main pathways, farm store, and restroom facilities
                  are wheelchair accessible. Please let us know if you need
                  special accommodations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Can I pick my own produce?
                </h3>
                <p className="text-gray-600">
                  During certain seasons, we offer u-pick experiences for
                  berries, apples, and pumpkins. Check our events calendar for
                  availability.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Do you offer wholesale pricing?
                </h3>
                <p className="text-gray-600">
                  Yes, we work with restaurants, schools, and other businesses.
                  Contact us for wholesale pricing and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

// Contact item helper component
function ContactItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-green-600 text-xl mt-1">
        <i className={icon}></i>
      </div>
      <div>
        <h4 className="font-medium text-gray-800 mb-1">{title}</h4>
        <div className="text-gray-600 text-sm">{text}</div>
      </div>
    </div>
  );
}
