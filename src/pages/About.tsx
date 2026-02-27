import { Linkedin } from 'lucide-react';

const expertise = [
  'Regulatory Compliance (Ontario OHSA)',
  'Health & Safety Program Development',
  'Policy Writing & Implementation',
  'Safety Culture Development',
  'Incident Investigation',
  'Workforce Safety Management (150+ Workers)'
];

const linkedInUrl = 'https://www.linkedin.com/in/collette-leroux-0512a748/';
const photoUrl = 'https://media.licdn.com/dms/image/v2/D4E03AQF6NfQmTA5SDQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702381944385?e=1773878400&v=beta&t=mqtX9d2kjYRr7wvKpbQxd3rfP_nurGmwsvOCJWcvTmY';

export default function About() {
  return (
    <div className="fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] border-2 border-ink overflow-hidden bg-light-gray">
              <img
                src={photoUrl}
                alt="Collette Leroux"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-8">
              About Collette
            </h1>
            <div className="space-y-6 text-ink leading-relaxed text-lg">
              <p>
                I'm the Health & Safety Manager at Space Aid Manufacturing, where I built the company's health and safety program from the ground up. In a short time, I've written the full suite of policies, established the compliance framework, and taken ownership of safety oversight for a plant of 150 workers.
              </p>
              <p>
                I came into this role with the mandate to create something that didn't exist — and I've approached it aggressively. That means developing programs rigorous enough to hold up under regulatory scrutiny and practical enough to actually work on the floor. It means writing policies that people can use, not just file. And it means building a safety culture that workers trust and leadership takes seriously.
              </p>
              <p>
                Health and safety is a field that rewards urgency. Complacency is the real hazard. I don't wait for things to go wrong to ask hard questions — I'd rather build systems that make the right behaviour the easy behaviour, long before anyone gets hurt.
              </p>
              <p>
                This site is where I share what I'm learning in real time — regulatory shifts that matter, industry trends worth watching, and honest reflections from someone still in the thick of building something meaningful.
              </p>
              <p>
                Outside of work, I'm a mom to two boys who keep me moving. You'll find me at yoga or barre most mornings, and when I'm not there, I'm with family or friends somewhere that doesn't involve a policy document.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-ink pt-12 mb-16">
          <h2 className="font-serif text-3xl font-bold text-ink mb-6">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.map((area) => (
              <div
                key={area}
                className="flex items-start gap-3 p-4 border-2 border-ink"
              >
                <span className="text-deep-red font-bold mt-1">→</span>
                <span className="text-ink font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-ink pt-12">
          <h2 className="font-serif text-3xl font-bold text-ink mb-6">What I Write About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Regulatory Shifts</h3>
              <p className="text-warm-gray leading-relaxed">
                Changes to OHSA, Ministry guidance, and compliance requirements that affect how you operate.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Industry Trends</h3>
              <p className="text-warm-gray leading-relaxed">
                Technology, automation, and new approaches to workplace safety — examined critically.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Best Practices</h3>
              <p className="text-warm-gray leading-relaxed">
                Tactics and approaches that work in real manufacturing environments, not just in theory.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Risk & Hazards</h3>
              <p className="text-warm-gray leading-relaxed">
                Risk assessment, hazard identification, and control strategies that hold up under scrutiny.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-ink mb-2">Safety Culture</h3>
              <p className="text-warm-gray leading-relaxed">
                Building cultures where workers feel safe speaking up and leaders actually listen.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-ink pt-12 mt-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">Connect</h2>
            <p className="text-warm-gray mb-6 max-w-xl">
              For speaking engagements, collaborations, or media inquiries
            </p>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-ink text-paper font-bold hover:bg-deep-red transition-colors"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}