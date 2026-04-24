export default defineSitemapEventHandler(async () => {
    const config = useRuntimeConfig()

    const [news, products,services,equipment] = await Promise.all([
        $fetch<{ results: any[] }>(`${config.public.apiUrl}/api/data/news/?index=false`),
        $fetch<{ results: any[] }>(`${config.public.apiUrl}/api/data/projects/?index=false`),
        $fetch<{ results: any[] }>(`${config.public.apiUrl}/api/data/services/?index=false`),
        $fetch<{ results: any[] }>(`${config.public.apiUrl}/api/data/equipment`),
    ])

    return [
        ...news.results.map(item => ({
            loc: `/news/${item.slug}`,
            lastmod: item.updated_at,
            changefreq: 'weekly',
            priority: 0.8,
        })),
        ...products.results.map(item => ({
            loc: `/project/${item.slug}`,
            lastmod: item.updated_at,
            changefreq: 'weekly',
            priority: 0.7,
        })),
        ...services.results.map(item => ({
            loc: `/service/${item.slug}`,
            lastmod: item.updated_at,
            changefreq: 'weekly',
            priority: 0.7,
        })),
        ...equipment.results.map(item => ({
            loc: `/equipment/${item.slug}`,
            lastmod: item.updated_at,
            changefreq: 'weekly',
            priority: 0.7,
        })),
    ]
})