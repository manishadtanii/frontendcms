<motion.form
  action="https://formsubmit.co/schedule@thevarallogroup.com"
  method="POST"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-2 gap-6"
>
  {/* Prevent spam bots */}
  <input type="hidden" name="_captcha" value="false" />
  {/* Redirect after submission (optional) */}
  <input type="hidden" name="_next" value="https://thevarallogroup.com/thank-you" />

  {/* First Name */}
  <motion.div custom={0} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      First Name*
    </label>
    <input
      type="text"
      name="first_name"
      placeholder="Enter first name"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* Attorney Name */}
  <motion.div custom={1} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Attorney Name*
    </label>
    <input
      type="text"
      name="attorney_name"
      placeholder="Enter attorney name"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* Contact Number */}
  <motion.div custom={2} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Contact Number*
    </label>
    <input
      type="tel"
      name="contact_number"
      placeholder="Enter contact number"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* Contact Name */}
  <motion.div custom={3} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Contact Name*
    </label>
    <input
      type="text"
      name="contact_name"
      placeholder="Enter contact name"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* Contact Email */}
  <motion.div custom={4} variants={fadeInUp} className="md:col-span-2 mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Contact Email Address*
    </label>
    <input
      type="email"
      name="contact_email"
      placeholder="Enter email address"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* Proceeding Info */}
  <motion.h4
    custom={5}
    variants={fadeInUp}
    className="md:col-span-2 font-bold text-p font-manrope mt-4"
  >
    Proceeding Information
  </motion.h4>

  {/* Preferred Date */}
  <motion.div custom={6} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Preferred Date*
    </label>
    <input
      type="date"
      name="preferred_date"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* Preferred Time */}
  <motion.div custom={7} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Preferred Time*
    </label>
    <input
      type="time"
      name="preferred_time"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* State */}
  <motion.div custom={8} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Select State*
    </label>
    <select
      name="state"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    >
      <option value="">Select State</option>
    </select>
  </motion.div>

  {/* City */}
  <motion.div custom={9} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Select City*
    </label>
    <select
      name="city"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    >
      <option value="">Select City</option>
    </select>
  </motion.div>

  {/* Witness */}
  <motion.div custom={10} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Witness(es)*
    </label>
    <input
      type="text"
      name="witnesses"
      placeholder="Enter witness(es)"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* Estimated Duration */}
  <motion.div custom={11} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Estimated Duration*
    </label>
    <input
      type="text"
      name="estimated_duration"
      placeholder="Enter duration"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* Services Needed */}
  <motion.div custom={12} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Services Needed*
    </label>
    <input
      type="text"
      name="services_needed"
      placeholder="Enter services needed"
      required
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* File Upload */}
  <motion.div custom={13} variants={fadeInUp} className="mb-3">
    <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
      Upload File
    </label>
    <input
      type="file"
      name="file"
      className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
    />
  </motion.div>

  {/* Submit Button */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="">
    <button
      type="submit"
      className="bg-black text-white rounded-2xl px-6 py-3 font-bold"
    >
      Start a Conversation
    </button>
  </motion.div>
</motion.form>
