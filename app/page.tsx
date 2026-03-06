import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function FreelanceSMMWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav className="space-x-6">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#booking">Book</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Social Media Management That Grows Your Brand</h2>
          <p className="mb-6 text-lg">I help businesses grow online through strategic content, engagement, and data-driven social media management.</p>
          <a href="#booking">
            <Button className="rounded-2xl">Book a Free Strategy Call</Button>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg font-semibold">Platforms I Manage</p>
              <ul className="mt-4 space-y-2">
                <li>Instagram</li>
                <li>TikTok</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section id="services" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Content Creation</h4>
                <p>Custom posts, reels, and graphics designed for engagement.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Account Management</h4>
                <p>Daily posting, audience engagement, and growth strategies.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Analytics & Strategy</h4>
                <p>Monthly reports and strategy adjustments to maximize results.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Results</h3>
          <p className="mb-10">Examples of growth and campaigns I've worked on.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6">
                <p className="text-2xl font-bold">+250%</p>
                <p>Instagram engagement growth</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow">
              <CardContent className="p-6">
                <p className="text-2xl font-bold">50K</p>
                <p>Views generated on TikTok campaigns</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow">
              <CardContent className="p-6">
                <p className="text-2xl font-bold">120%</p>
                <p>Follower growth in 3 months</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Book a Free Consultation</h3>
          <p className="mb-10">Schedule a call to discuss how we can grow your social media.</p>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://calendly.com/YOUR-CALENDLY-LINK"
              width="100%"
              height="600"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Get a Free Social Media Audit</h3>
          <p className="text-center mb-8">Leave your details and I'll send you a free growth audit.</p>

          <Card className="rounded-2xl shadow">
            <CardContent className="p-6 space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
              <Input placeholder="Business / Brand" />
              <Textarea placeholder="Tell me about your social media goals" />
              <Button className="w-full rounded-2xl">Request Free Audit</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center p-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
