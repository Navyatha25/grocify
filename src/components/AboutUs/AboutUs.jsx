import Heading from "../Heading/Heading";

const About = () => {
    return (
        <section id="about" >
            <div className='max-w-[1400px] mx-auto px-10 py-25'>
                <Heading highlight="About" heading="Us" />

                <div className="bg-zinc-100 rounded-xl p-8 mt-20 font-serif">
                    <p className="text-zinc-800 leading-7 mt-10">
                        Grocify is an online grocery platform designed to make everyday
                        shopping simple and fast. We provide fresh fruits, vegetables,
                        dairy products, and seafood delivered directly to your doorstep.
                    </p>

                    <p className="mt-4 text-zinc-800 leading-7 mt-10">
                        At Grocify, we believe that good food is the foundation of a healthy and happy life. Our goal is to make everyday grocery shopping easy, affordable, and reliable for everyone. From farm-fresh fruits and vegetables to quality dairy products, seafood, and daily essentials, we carefully select products to ensure freshness and quality in every order.

                        We are committed to saving your time by bringing the market to your doorstep with a smooth and user-friendly online shopping experience. With transparent pricing, secure checkout, and fast delivery, we aim to build trust and long-term relationships with our customers. At Grocify, your convenience and satisfaction always come first, because you deserve fresh, healthy groceries without the hassle.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;


