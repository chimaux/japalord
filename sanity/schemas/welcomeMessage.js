import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'welcomeMessage',
  title: 'WelcomeMessage',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Title1',
      type: 'string',
    }),    defineField({
      name: 'name2',
      title: 'Title2',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string',
    }),
  ],

})


















// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'author',
//   title: 'Author',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'name',
//         maxLength: 96,
//       },
//     }),
//     defineField({
//       name: 'image',
//       title: 'Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//     }),
//     defineField({
//       name: 'bio',
//       title: 'Bio',
//       type: 'array',
//       of: [
//         {
//           title: 'Block',
//           type: 'block',
//           styles: [{title: 'Normal', value: 'normal'}],
//           lists: [],
//         },
//       ],
//     }),
//   ],
//   preview: {
//     select: {
//       title: 'name',
//       media: 'image',
//     },
//   },
// })
