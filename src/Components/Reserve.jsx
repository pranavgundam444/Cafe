import { useState } from "react";
import { toast } from "react-toastify";
import { Users, Calendar, Clock, Phone, Mail, MapPin } from "lucide-react";

export default function Reserve() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phone, email, guests, date, time } = formData;

    if (!fullName || !phone || !email || !guests || !date || !time) {
      toast.error("Please fill all required fields", {
        position: "top-center",
      });
      return;
    }

    toast.success("🎉 Reservation Successful! Your table has been reserved.", {
      position: "top-center",
    });

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      guests: "",
      date: "",
      time: "",
      request: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f6eadc]">
      {/* Hero */}
      <section
        className="relative min-h-[62vh] bg-cover bg-center flex items-center justify-center px-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-3xl pt-20">
          <p className="text-[#d19a5b] uppercase tracking-[0.35em] text-xs font-bold mb-4">
            Kapi Cafe Reservation
          </p>

          <h1 className="font-playfair text-4xl md:text-6xl text-white font-bold">
            Reserve Your Perfect Table
          </h1>

          <p className="text-white/80 mt-5 text-base md:text-lg">
            Book a cozy spot for coffee, conversations, and fresh cafe moments.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-5 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <InfoCard icon={<Users />} title="Table Size" text="Choose from 1 to 6 guests." />
          <InfoCard icon={<Clock />} title="Cafe Timings" text="Open daily from 9 AM to 11 PM." />
          <InfoCard icon={<Calendar />} title="Easy Booking" text="Reserve your table in advance." />
        </div>
      </section>

      {/* Reservation Section */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e0c4a4]">
            <div className="bg-[#3b2417] px-7 py-6">
              <p className="text-[#d19a5b] uppercase tracking-[0.3em] text-xs font-bold mb-2">
                Book Now
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl text-white font-bold">
                Make a Reservation
              </h2>
              <p className="text-white/70 mt-2 text-sm">
                Fill your details and we’ll keep your table ready.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-7 bg-[#fffaf5]"
            >
              <Input label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter name" />
              <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone" />
              <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />

              <div>
                <label className="block text-[#3b2417] font-semibold mb-2 text-sm">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border border-[#d8b895] bg-white rounded-xl px-4 py-3 outline-none focus:border-[#b8793a] text-[#3b2417]"
                >
                  <option value="">Select Table Size</option>
                  <option value="2">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5">5 Persons</option>
                  <option value="6">6 Persons</option>
                </select>
              </div>

              <Input label="Date" type="date" name="date" value={formData.date} onChange={handleChange} />
              <Input label="Time" type="time" name="time" value={formData.time} onChange={handleChange} />

              <div className="md:col-span-2">
                <label className="block text-[#3b2417] font-semibold mb-2 text-sm">
                  Special Request
                </label>
                <textarea
                  rows="3"
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  placeholder="Birthday setup, window side table, etc."
                  className="w-full border border-[#d8b895] bg-white rounded-xl px-4 py-3 outline-none focus:border-[#b8793a] resize-none text-[#3b2417]"
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 bg-[#b8793a] text-white py-3.5 rounded-xl font-bold tracking-widest uppercase hover:bg-[#3b2417] transition-all shadow-lg"
              >
                Confirm Reservation
              </button>
            </form>
          </div>

          {/* Side Card */}
          <div className="bg-[#3b2417] text-white rounded-3xl shadow-2xl overflow-hidden">
            <div
              className="h-56 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80')",
              }}
            />

            <div className="p-7">
              <p className="text-[#d19a5b] uppercase tracking-[0.3em] text-xs font-bold mb-3">
                Visit Us
              </p>

              <h3 className="font-playfair text-3xl font-bold mb-5">
                Kapi Cafe
              </h3>

              <div className="space-y-4 text-white/80 text-sm">
                <ContactRow icon={<MapPin size={19} />} text="Road No. 12, Banjara Hills, Hyderabad" />
                <ContactRow icon={<Phone size={19} />} text="+91 98765 43210" />
                <ContactRow icon={<Mail size={19} />} text="hello@kapicafe.com" />
                <ContactRow icon={<Clock size={19} />} text="9:00 AM - 11:00 PM, Every Day" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Input({ label, type, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-[#3b2417] font-semibold mb-2 text-sm">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-[#d8b895] bg-white rounded-xl px-4 py-3 outline-none focus:border-[#b8793a] text-[#3b2417]"
      />
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#e0c4a4]">
      <div className="w-12 h-12 rounded-full bg-[#f1dfca] text-[#b8793a] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-playfair text-xl text-[#3b2417] font-bold mb-1">
        {title}
      </h3>
      <p className="text-[#7a5b45] text-sm">{text}</p>
    </div>
  );
}

function ContactRow({ icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-[#d19a5b] mt-0.5">{icon}</div>
      <p>{text}</p>
    </div>
  );
}