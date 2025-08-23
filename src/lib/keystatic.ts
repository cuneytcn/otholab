import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

// All Team
export const getAllTeam = async () => {
    const reader = createReader(process.cwd(), keystaticConfig);
    const team = await reader.collections.team.all();

    return team.map((item) => item.entry);
};

// All Projects
export const getAllProjects = async () => {
    const reader = createReader(process.cwd(), keystaticConfig);
    const projectsRaw = await reader.collections.projects.all();
    const projects = await Promise.all(
        projectsRaw.map(async (item) => {
            return {
                id: item.slug ?? undefined,
                title: item.entry.name ?? '',
                description: item.entry.description ?? '',
                longDescription: item.entry.longDescription
                    ? await item.entry.longDescription()
                    : '',
                images: Array.isArray(item.entry.images)
                    ? [...item.entry.images]
                    : [],
                technologies: Array.isArray(item.entry.technologies)
                    ? [...item.entry.technologies]
                    : [],
                category: item.entry.category ?? '',
                date: item.entry.date ?? '',
                clientName: item.entry.clientName ?? '',
                location: item.entry.location ?? '',
                area: item.entry.area ?? '',
                projectUrl: item.entry.name.split(' ').join('-') ?? '',
                tags: Array.isArray(item.entry.tags)
                    ? [...item.entry.tags]
                    : [],
            };
        })
    );
    return projects;
};

// Single Project by slug
export const getProjectBySlug = async (slug: string) => {
    const reader = createReader(process.cwd(), keystaticConfig);
    const item = await reader.collections.projects.read(slug);
    if (!item) return null;

    return {
        id: slug,
        title: item.name ?? '',
        description: item.description ?? '',
        longDescription: item.longDescription
            ? await item.longDescription()
            : '',
        images: Array.isArray(item.images) ? [...item.images] : [],
        technologies: Array.isArray(item.technologies)
            ? [...item.technologies]
            : [],
        category: item.category ?? '',
        date: item.date ?? '',
        clientName: item.clientName ?? '',
        location: item.location ?? '',
        area: item.area ?? '',
        tags: Array.isArray(item.tags) ? [...item.tags] : [],
    };
};

// ALl Courses
export const getAllCourses = async () => {
    const reader = createReader(process.cwd(), keystaticConfig);
    const coursesRaw = await reader.collections.courses.all();
    const courses = coursesRaw.map((item) => ({
        id: item.slug ?? undefined,
        name: item.entry.name ?? '',
        title: item.entry.name ?? '',
        description: item.entry.description ?? '',
        level: item.entry.level ?? '',
        price: item.entry.price ?? '',
        duration: item.entry.duration ?? '',
        features: Array.isArray(item.entry.features)
            ? [...item.entry.features]
            : [],
        paymentUrl: item.entry.paymentLink ?? '',
    }));

    return courses;
};

// Get settings from singleton Settings
export const getSettings = async () => {
    const reader = createReader(process.cwd(), keystaticConfig);
    const settings = await reader.singletons.settings.read();

    return settings;
};

// Get seo info from singleton SEO
export const getSeo = async () => {
    const reader = createReader(process.cwd(), keystaticConfig);
    const seo = await reader.singletons.seo.read();

    return seo;
};

// Get contact info from singleton Contact
export const getContact = async () => {
    const reader = createReader(process.cwd(), keystaticConfig);
    const contact = await reader.singletons.contact.read();

    return contact;
};

//  Get socials from singleton Socials
export const getSocials = async () => {
    const reader = createReader(process.cwd(), keystaticConfig);
    const socials = await reader.singletons.socialMedia.read();

    return socials;
};
