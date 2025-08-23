import { collection, config, fields, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    singletons: {
        settings: singleton({
            label: 'Settings',
            path: 'src/content/settings',
            format: { data: 'json' },
            schema: {
                siteName: fields.text({ label: 'Site Name' }),
                // siteDescription: fields.text({
                //     label: 'Site Description',
                //     multiline: true,
                // }),
                logo: fields.image({
                    label: 'Logo',
                    directory: 'public/images',
                    publicPath: '/images',
                }),
                favicon: fields.image({
                    label: 'Favicon',
                    directory: 'public/images',
                    publicPath: '/images',
                }),
            },
        }),
        seo: singleton({
            label: 'SEO',
            path: 'src/content/seo',
            format: { data: 'json' },
            schema: {
                title: fields.text({ label: 'Title' }),
                description: fields.text({
                    label: 'Description',
                    multiline: true,
                }),
                keywords: fields.array(fields.text({ label: 'Keyword' }), {
                    label: 'Keywords',
                    itemLabel: (item) =>
                        typeof item === 'string' ? item : 'Keyword',
                }),
            },
        }),
        contact: singleton({
            label: 'Contact',
            path: 'src/content/contact',
            format: { data: 'json' },
            schema: {
                email: fields.text({ label: 'Email' }),
                phone: fields.text({ label: 'Phone' }),
                address: fields.object({
                    street: fields.text({ label: 'Street' }),
                    city: fields.text({ label: 'City' }),
                    state: fields.text({ label: 'State' }),
                    zip: fields.text({ label: 'ZIP Code' }),
                    country: fields.text({ label: 'Country' }),
                }),
                mapEmbedUrl: fields.url({ label: 'Map Embed URL' }),
            },
        }),
        socialMedia: singleton({
            label: 'Social Media',
            path: 'src/content/social-media',
            format: { data: 'json' },
            schema: {
                facebook: fields.url({ label: 'Facebook' }),
                twitter: fields.url({ label: 'Twitter' }),
                instagram: fields.url({ label: 'Instagram' }),
                linkedin: fields.url({ label: 'LinkedIn' }),
                youtube: fields.url({ label: 'YouTube' }),
            },
        }),
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
                duration: fields.text({ label: 'Duration' }),
                level: fields.select({
                    label: 'Level',
                    options: [
                        { label: 'Başlangıç', value: 'Başlangıç' },
                        { label: 'Orta', value: 'Orta' },
                        { label: 'İleri', value: 'İleri' },
                    ],
                    defaultValue: 'Başlangıç',
                }),
                price: fields.text({ label: 'Price' }),
                description: fields.text({
                    label: 'Description',
                    multiline: true,
                }),
                features: fields.array(fields.text({ label: 'Feature' }), {
                    label: 'Features',
                    itemLabel: (item) =>
                        typeof item === 'string' ? item : 'Feature',
                }),
                paymentLink: fields.url({ label: 'Payment Link' }),
            },
        }),
    },
});
