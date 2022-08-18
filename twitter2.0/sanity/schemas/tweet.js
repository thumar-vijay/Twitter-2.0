export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },
    {
      name: 'BlockTweet',
      title: 'Block Tweet',
      discription: 'ADMIN Controls: Tooggle if Tweet is deemed inappropriate',
      type: 'boolean',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Tweet image',
      type: 'string',
    }
  ],
}
