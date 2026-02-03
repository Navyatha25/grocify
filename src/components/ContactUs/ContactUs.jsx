import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
       <div className='max-w-[1400px] mx-auto px-10 py-10'>
                <Heading highlight="Contact" heading="Us" />

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {/* Info */}
          <div>
            <p className="text-zinc-800 mb-4 ">
              Have questions or feedback? We’d love to hear from you.
            </p>

            <p className="text-zinc-700"><strong>Email:</strong> support@grocify.com</p>
            <p className="text-zinc-700 mt-2"><strong>Phone:</strong> +91 98765 43210</p>
            <p className="text-zinc-700 mt-2"><strong>Location:</strong> India</p>
          </div>

          {/* Form */}
          <form className="bg-zinc-100 p-6 rounded-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 rounded"
            />
            <Button content="Send Message"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
