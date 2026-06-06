import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "react-toastify";

const handleSubmit = (e) => {
  e.preventDefault();

  toast.success("Thank you for contacting us! We'll get back to you soon.", {
    position: "top-center",
  });

  e.target.reset();
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f6eadc] text-[#3b2417]">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] bg-cover bg-center flex items-center justify-center px-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-3xl pt-20">
          <p className="text-[#d19a5b] uppercase tracking-[0.35em] text-xs font-bold mb-4">
            Contact Kapi Cafe
          </p>

          <h1 className="font-playfair text-4xl md:text-6xl text-white font-bold">
            We’d Love to Hear From You
          </h1>

          <p className="text-white/80 mt-5 text-base md:text-lg">
            Visit us for coffee, conversations, and a warm cafe experience.
          </p>
        </div>
      </section>

      {/* Floating Contact Cards */}
      <section className="max-w-6xl mx-auto px-5 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <InfoCard
            icon={<MapPin size={26} />}
            title="Address"
            text="Road No. 12, Banjara Hills, Hyderabad"
          />
          <InfoCard
            icon={<Phone size={26} />}
            title="Phone"
            text="+91 98765 43210"
          />
          <InfoCard
            icon={<Mail size={26} />}
            title="Email"
            text="hello@kapicafe.com"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          {/* Cafe Info Card */}
          <div className="bg-[#3b2417] text-white rounded-3xl shadow-2xl overflow-hidden">
            <div
              className="h-60 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80')",
              }}
            />

            <div className="p-7 md:p-8">
              <p className="text-[#d19a5b] uppercase tracking-[0.3em] text-xs font-bold mb-3">
                Visit Our Cafe
              </p>

              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Kapi Cafe
              </h2>

              <p className="text-white/75 leading-7 text-sm mb-7">
                Enjoy freshly brewed coffee, desserts, and a peaceful cafe
                ambience at the heart of Hyderabad.
              </p>

              <div className="space-y-5 text-white/85 text-sm">
                <ContactRow
                  icon={<MapPin size={19} />}
                  title="Location"
                  text="Road No. 12, Banjara Hills, Hyderabad, Telangana - 500034"
                />
                <ContactRow
                  icon={<Clock size={19} />}
                  title="Opening Hours"
                  text="Monday - Sunday, 9:00 AM - 11:00 PM"
                />
                <ContactRow
                  icon={<Phone size={19} />}
                  title="Call Us"
                  text="+91 98765 43210"
                />
                <ContactRow
                  icon={<Mail size={19} />}
                  title="Mail Us"
                  text="hello@kapicafe.com"
                />
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e0c4a4]">
            <div className="bg-[#fffaf5] px-7 py-6 flex flex-col gap-2 border-b border-[#ead8c2]">
              <p className="text-[#b8793a] uppercase tracking-[0.3em] text-xs font-bold mb-2">
                Send Message
              </p>
{/* 
              <p className="font-playfair text-3xl md:text-xl text-[#b8793a] font-bold">
                Get in Touch
              </p> */}

              <p className="text-[#7a5b45] mt-2 text-sm">
                Have a question or feedback? Send us a quick message.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-7 bg-white space-y-4"
            >
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your name"
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />

              <div>
                <label className="block text-[#3b2417] font-semibold mb-2 text-sm">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-[#d8b895] bg-[#fffaf5] rounded-xl px-4 py-3 outline-none focus:border-[#b8793a] resize-none text-[#3b2417]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#b8793a] text-white py-3.5 rounded-xl font-bold tracking-widest uppercase hover:bg-[#3b2417] transition-all shadow-lg"
              >
                <Send size={18} />
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#e0c4a4] hover:-translate-y-2 transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-[#f1dfca] text-[#b8793a] flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>

      <h3 className="font-playfair text-xl text-[#3b2417] font-bold mb-1 text-center">
        {title}
      </h3>

      <p className="text-[#7a5b45] text-sm text-center">{text}</p>
    </div>
  );
}

function Input({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-[#3b2417] font-semibold mb-2 text-sm">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-[#d8b895] bg-[#fffaf5] rounded-xl px-4 py-3 outline-none focus:border-[#b8793a] text-[#3b2417]"
      />
    </div>
  );
}

function ContactRow({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="text-[#d19a5b] mt-1">{icon}</div>

      <div>
        <h4 className="text-[#d19a5b] font-bold mb-1">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
