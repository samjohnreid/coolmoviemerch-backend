export default {
    name: 'movie',
    type: 'document',
    title: 'Movies',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'year',
            type: 'string',
            title: 'Year'
        },
        {
            name: 'directors',
            type: 'array',
            title: 'Director(s)',
            of: [{
                type: 'reference',
                to: [{type: 'director'}]
            }]
        },
        {
            name: 'genre',
            type: 'array',
            title: 'Genre(s)',
            of: [{
                type: 'reference',
                to: [{type: 'genre'}]
            }]
        },
        {
            name: 'poster',
            type: 'image',
            title: 'Poster'
        }
    ]
}