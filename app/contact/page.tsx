const Contact = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-5xl text-accent">Let&rsquo;s Work Together!</span>
            <p className="max-w-[600px] mb-9 text-white/80 text-xl py-10">
            I am looking to be part of a team that is committed to making a positive impact through technology. With my background in full-stack development, I am ready to help build solutions that enhance people&rsquo;s lives.
            </p>
            <p>Email: danindunawa@gmail.com</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
