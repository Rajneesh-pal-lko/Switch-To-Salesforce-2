"use client";

import { motion } from "framer-motion";
import {
  BookOpenText,
  CircleX,
  Route,
  CalendarCheck2,
  ClipboardCheck,
  ClipboardList,
  MessagesSquare,
  MessageCircle,
  Mail
} from "lucide-react";

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const problemCards = [
  {
    title: "Lost in Tutorials",
    desc: "You're confused about what to study and have no clear direction.",
    Icon: BookOpenText
  },
  {
    title: "Interview Anxiety",
    desc: "Failing interviews, not getting calls, or freezing up on scenario-based questions.",
    Icon: CircleX
  },
  {
    title: "Unstructured Prep",
    desc: "Jumping from topic to topic without a plan that recruiters actually care about.",
    Icon: Route
  }
];

const offerCards = [
  {
    title: "1:1 Mock Interview",
    desc: "Real interview simulation.",
    Icon: CalendarCheck2
  },
  {
    title: "Detailed Feedback",
    desc: "What went wrong + exactly how to fix it.",
    Icon: ClipboardCheck
  },
  {
    title: "Personalized Prep Plan",
    desc: "A structured roadmap.",
    Icon: ClipboardList
  },
  {
    title: "Guidance Session",
    desc: "Clear your doubts.",
    Icon: MessagesSquare
  }
];

export default function HomePage() {
  const whatsappLink =
    "https://wa.me/918630541649?text=Hi%2C%20I%20want%20to%20book%20my%20first%20Salesforce%20mock%20interview.";
  const emailAddress = "mentor@switchtosalesforce.com";

  return (
    <div className="text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-lg">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="text-lg font-extrabold tracking-tight">
            Switch To Salesforce
          </a>
          <a
            href="#contact-cta"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Book Mock Interview
          </a>
        </nav>
      </header>

      <main id="top">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionMotion}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pt-24"
        >
          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-white p-8 text-center shadow-sm sm:p-12">
            <h1 className="mx-auto max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              You don’t need more courses. You need real interview practice.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base text-slate-600 sm:text-lg">
              Stop preparing randomly. Get scenario-based mock interviews, actionable feedback, and
              a clear roadmap to crack your first Salesforce Admin or Developer role.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700"
              >
                Send an Email
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Does this sound like your Salesforce journey?
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {problemCards.map(({ title, desc, Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Icon className="h-8 w-8 text-indigo-600" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Introducing the Salesforce Interview Starter Pack
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Everything you need to face your next interview with confidence. No fluff, just
            practical mentorship.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {offerCards.map(({ title, desc, Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Icon className="h-7 w-7 text-indigo-600" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">From Confused to Confident</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-rose-200 bg-rose-50/60 p-6">
              <h3 className="text-lg font-semibold text-rose-800">Before</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-rose-900/85">
                <li>Random preparation</li>
                <li>Fear in interviews</li>
                <li>No feedback</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6">
              <h3 className="text-lg font-semibold text-emerald-800">After</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-emerald-900/85">
                <li>Clear roadmap</li>
                <li>Structured answers</li>
                <li>Confidence to perform</li>
              </ul>
            </article>
          </div>
        </motion.section>

        <motion.section
          id="contact-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-6"
        >
          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to start preparing the right way?
            </h2>
            <p className="mt-3 text-slate-600">
              Reach out to discuss your goals and book your first mock interview.
            </p>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">WhatsApp (Recommended)</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Fastest way to connect and discuss your prep goals.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message me on WhatsApp
                </a>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">Direct Email</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Prefer email? Contact me directly and share your current prep level.
                </p>
                <a
                  href={`mailto:${emailAddress}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <Mail className="h-4 w-4" />
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto w-full max-w-6xl px-4 text-center text-sm text-slate-500 sm:px-6">
          Copyright 2026 Switch To Salesforce.
        </div>
      </footer>
    </div>
  );
}
