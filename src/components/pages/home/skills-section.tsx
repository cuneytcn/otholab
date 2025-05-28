const skills = [
  {
    id: 1,
    name: 'Environmental Engineering',
    description: [
      'Frequently partiality possession resolution at or appearance unaffected he me.',
      'Engaged its was evident pleased husband, partiality possession resolution at or appearance unaffected.',
    ],
  },
  {
    id: 2,
    name: 'Industrial Design',
    description: [
      'Frequently partiality possession resolution at or appearance unaffected he me.',
      'Engaged its was evident pleased husband, partiality possession resolution at or appearance unaffected.',
    ],
  },
  {
    id: 3,
    name: 'Design Management',
    description: [
      'Frequently partiality possession resolution at or appearance unaffected he me.',
      'Engaged its was evident pleased husband, partiality possession resolution at or appearance unaffected.',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="relative w-full py-10 bg-black">
      <div className="container mx-auto px-5">
        {skills.map((skill) => (
          <div key={skill.id} className="py-10 border-b last:border-none grid grid-cols-12">
            <div className="col-span-full lg:col-span-5">
              <h4 className="text-white mb-4">{skill.name}</h4>
            </div>
            <div className="col-span-full lg:col-span-7">
              <ul className="text-gray-400">
                {skill.description.map((desc, index) => (
                  <li key={index} className="my-1">
                    <p>{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
