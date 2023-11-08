const Footer = () => {
    return ( 
        <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur magna ut sem ullamcorper, ac porta urna varius. Nunc id pulvinar urna.</p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Phone: 123-456-7890</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Address: 123 Street, City, Country</p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="text-sm">
            <li className="mb-2"><a href="/faqs">FAQs</a></li>
            <li className="mb-2"><a href="/shipping-returns">Shipping & Returns</a></li>
            <li className="mb-2"><a href="/privacy-policy">Privacy Policy</a></li>
            <li className="mb-2"><a href="/terms-conditions">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <ul className="text-sm">
            <li className="mb-2"><a href="https://www.facebook.com">Facebook</a></li>
            <li className="mb-2"><a href="https://www.instagram.com">Instagram</a></li>
            <li className="mb-2"><a href="https://www.twitter.com">Twitter</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-sm">Stay updated with the latest news, promotions, and product launches by subscribing to our newsletter.</p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-6">
        <p className="text-sm text-gray-500">Copyright © 2023 E-Kart. All rights reserved.</p>
      </div>
    </footer>
     );
}
 
export default Footer;