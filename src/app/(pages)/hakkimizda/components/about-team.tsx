interface Member {
    name: string;
    role: string;
    description: string;
}

interface Team {
    data: Member[];
}

export default function AboutTeam({ data }: Team) {
    const team = data;

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Uzman Ekibimiz
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600">
                        Deneyimli ve tutkulu ekibimizle her projede
                        mükemmeliyeti hedefliyoruz
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {team.map((member, index) => (
                        <div key={index} className="group text-center">
                            <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 transition-transform duration-300 group-hover:scale-105">
                                <span className="text-2xl font-bold text-white">
                                    {member.name
                                        .split(' ')
                                        .map((n: string) => n[0])
                                        .join(' ')}
                                </span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-900">
                                {member.name}
                            </h3>
                            <p className="mb-3 font-semibold text-purple-600">
                                {member.role}
                            </p>
                            <p className="text-sm leading-relaxed text-gray-600">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
