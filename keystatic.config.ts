import { collection, config, fields } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        team: collection({
            label: 'Team',
            slugField: 'name',
            path: 'src/content/team/*',
            format: { data: 'json' },
            schema: {
                name: fields.slug({
                    name: {
                        label: 'Name',
                    },
                    slug: {
                        label: 'Slug',
                    },
                }),
                role: fields.text({ label: 'Role' }),
                description: fields.text({
                    label: 'Description',
                    multiline: true,
                }),
            },
        }),
        projects: collection({
            label: 'Project',
            slugField: 'name',
            path: 'src/content/projects/*',
            format: { data: 'json' },
            schema: {
                name: fields.slug({
                    name: {
                        label: 'Name',
                    },
                    slug: {
                        label: 'Slug',
                    },
                }),

                description: fields.text({
                    label: 'Description',
                }),
                longDescription: fields.mdx({
                    label: 'Long Description',
                }),
                images: fields.array(
                    fields.image({
                        label: 'Images',
                        directory: 'public/images/projects',
                        publicPath: '/images/projects',
                    }),
                    {
                        label: 'Images',
                        itemLabel: (item) =>
                            typeof item === 'string' ? item : 'Image',
                    }
                ),
                technologies: fields.array(
                    fields.text({ label: 'Technology' }),
                    {
                        label: 'Technologies',
                        itemLabel: (item) =>
                            typeof item === 'string' ? item : 'Technology',
                    }
                ),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Konut', value: 'konut' },
                        { label: 'Ticari', value: 'ticari' },
                        { label: 'İç Mekan', value: 'ic-mekan' },
                        { label: 'Peyzaj', value: 'peyzaj' },
                    ],
                    defaultValue: 'konut',
                }),
                date: fields.date({ label: 'Date' }),
                clientName: fields.text({ label: 'Client Name' }),
                location: fields.text({ label: 'Location' }),
                area: fields.text({ label: 'Area' }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: (item) =>
                        typeof item === 'string' ? item : 'Tag',
                }),
            },
        }),
        courses: collection({
            label: 'Courses',
            slugField: 'name',
            path: 'src/content/courses/*',
            format: { data: 'json' },
            schema: {
                name: fields.slug({
                    name: { label: 'Name' },
                    slug: { label: 'Slug' },    
                }),
            },
        }),
    },
});
