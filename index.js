import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 min-h-screen text-white font-sans">
      <Head>
        <title>Vibhanshu Jaiswal | Portfolio</title>
        <meta name="description" content="Portfolio website of Vibhanshu Jaiswal" />
      </Head>
      <header className="py-8 flex flex-col items-center">
        <motion.img
          src="https://ui-avatars.com/api/?name=Vibhanshu+Jaiswal&background=0D8ABC&color=fff&size=160"
          alt="Profile"
          className="rounded-full w-40 h-40 mb-6 border-4 border-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl font-extrabold mb-2 text-shadow-xl"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Vibhanshu Jaiswal
        </motion.h1>
        <motion.p className="mb-2 text-xl font-semibold"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}>
          Computer Science Engineer
        </motion.p>
        <motion.div className="flex gap-6 mt-4"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}>
          <a href="https://instagram.com/luckyjaiswal3832" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} />
          </a>
          <a href="mailto:vibhanshujaiswal28@gmail.com" title="Email">
            <FaEnvelope size={32} />
          </a>
        </motion.div>
        <motion.p className="flex items-center mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }}>
          <FaMapMarkerAlt className="mr-2" /> Prayagraj, Uttar Pradesh
        </motion.p>
      </header>
      <main className="max-w-4xl mx-auto px-6">
        {/* About Me */}
        <motion.section className="my-12" initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}>
          <h2 className="text-3xl font-bold mb-4 border-b border-white">About Me</h2>
          <p className="text-lg leading-relaxed bg-black bg-opacity-20 p-5 rounded">
            Highly motivated and detail-oriented Computer Science Engineer passionate about crafting impactful digital solutions. Experienced in Python, C, Django, web development, and blockchain technologies, with a proven record of building secure, scalable products and intuitive user interfaces. Known for excellent communication, teamwork, and a dedication to continuous learning and innovation.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section className="my-12" initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}>
          <h2 className="text-3xl font-bold mb-4 border-b border-white">Skills & Technologies</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            <li className="transition-transform transform hover:scale-105">Python</li>
            <li className="transition-transform transform hover:scale-105">C</li>
            <li className="transition-transform transform hover:scale-105">HTML</li>
            <li className="transition-transform transform hover:scale-105">CSS</li>
            <li className="transition-transform transform hover:scale-105">Django</li>
            <li className="transition-transform transform hover:scale-105">Blockchain</li>
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section className="my-12" initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}>
          <h2 className="text-3xl font-bold mb-4 border-b border-white">Projects</h2>
          <div className="space-y-8">
            <motion.div className="bg-white bg-opacity-10 p-5 rounded shadow-lg hover:bg-opacity-20 transition" initial={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold mb-1 text-indigo-200">e-Vault (Blockchain)</h3>
              <p className="mb-2">A secure vault for storing documents, leveraging blockchain for transparency and security.</p>
              <span className="text-sm">Tech: HTML, CSS, JavaScript, Django, Blockchain, Redis, SQL</span>
            </motion.div>
            <motion.div className="bg-white bg-opacity-10 p-5 rounded shadow-lg hover:bg-opacity-20 transition" initial={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold mb-1 text-indigo-200">Real Estate Website</h3>
              <p className="mb-2">A seamless platform for buying and selling properties online.</p>
              <span className="text-sm">Tech: HTML, CSS, JavaScript, Django, dbsqlite</span>
            </motion.div>
            <motion.div className="bg-white bg-opacity-10 p-5 rounded shadow-lg hover:bg-opacity-20 transition" initial={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold mb-1 text-indigo-200">Aptitude Practice Website</h3>
              <p className="mb-2">A question bank for practicing aptitude problems for competitive exams.</p>
              <span className="text-sm">Tech: HTML, CSS, JavaScript, dbsqlite</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section className="my-12" initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}>
          <h2 className="text-3xl font-bold mb-4 border-b border-white">Education</h2>
          <div className="bg-white bg-opacity-10 p-5 rounded mb-4">
            <p className="text-lg font-semibold">BTech in Computer Science & Engineering</p>
            <p className="text-md">United College of Engineering and Research, Naini, Prayagraj</p>
            <p className="text-sm">2021 - 2025 | CGPA: 8.31</p>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section className="my-12" initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } }
          }}>
          <h2 className="text-3xl font-bold mb-4 border-b border-white">Contact</h2>
          <div className="space-y-2">
            <p className="flex items-center"><FaEnvelope className="mr-2"/> vibhanshujaiswal28@gmail.com</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2"/> Prayagraj, Uttar Pradesh</p>
            <p className="flex items-center"><FaLinkedin className="mr-2"/> <a href="https://linkedin.com/in/luckyjaiswal3832" className="underline">linkedin.com/in/luckyjaiswal3832</a></p>
            <p className="flex items-center"><FaGithub className="mr-2"/> <a href="https://github.com/vibhanshujais" className="underline">github.com/vibhanshujais</a></p>
            <p className="flex items-center"><FaInstagram className="mr-2"/> <a href="https://instagram.com/luckyjaiswal3832" className="underline">instagram.com/luckyjaiswal3832</a></p>
            <p>Phone: 9971497473</p>
            <p>Resume: <a href="/vibhanshu-resume-3.pdf" className="underline">Download PDF</a></p>
          </div>
        </motion.section>
      </main>
      <footer className="text-center py-6 text-sm mt-10 bg-black bg-opacity-20">
        © 2025 Vibhanshu Jaiswal. All rights reserved.
      </footer>
    </div>
  );
}
