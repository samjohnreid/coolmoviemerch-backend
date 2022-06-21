export default {
    name: 'item',
    type: 'document',
    title: 'Items',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'url',
            type: 'url',
            title: 'URL'
        },
        {
            name: 'movie',
            type: 'reference',
            to: [{type: 'movie'}]
        },
        {
            name: 'category',
            type: 'reference',
            to: [{type: 'category'}]
        },
        {
            name: 'license',
            type: 'reference',
            to: [{type: 'license'}]
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'featured',
            type: 'boolean',
            title: 'Featured'
        },
        {
            name: 'hero',
            type: 'boolean',
            title: 'Hero'
        },
        {
            name: 'heroImageThumb',
            type: 'image',
            title: 'Hero Image - Thumbnail',
            hidden: ({document}) => !document?.hero
        },
        {
            name: 'heroImageDesktop',
            type: 'image',
            title: 'Hero Image - Desktop',
            hidden: ({document}) => !document?.hero
        },
        {
            name: 'heroImageTablet',
            type: 'image',
            title: 'Hero Image - Tablet',
            hidden: ({document}) => !document?.hero
        },
        {
            name: 'heroImageMobile',
            type: 'image',
            title: 'Hero Image - Mobile',
            hidden: ({document}) => !document?.hero
        },
    ]
}