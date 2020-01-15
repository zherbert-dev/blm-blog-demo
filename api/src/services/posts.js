import { UserInputError } from '@redwoodjs/api'
import { Photon } from '@prisma/photon'

const photon = new Photon()

const validate = (input) => {
  if (input.slug && !input.slug.match(/^\S+$/)) {
    throw new UserInputError("Can't create new post", {
      messages: {
        slug: ['contains invalid characters (no spaces allowed)'],
      },
    })
  }
}

const Posts = {
  allPosts: async ({
    page = 1,
    limit = 100,
    order = { createdAt: 'desc' },
  }) => {
    const offset = (page - 1) * limit

    return {
      posts: photon.posts.findMany({
        first: limit,
        skip: offset,
        orderBy: order,
      }),
      count: photon.posts.count(),
    }
  },

  findPostById: ({ id }) => {
    return photon.posts.findOne({
      where: { id: parseInt(id) },
    })
  },

  findPostBySlug: ({ slug }) => {
    return photon.posts.findOne({
      where: { slug: slug },
    })
  },

  findPostsByTag: ({ tag }) => {
    return photon.tags
      .findOne({
        where: { name: tag },
      })
      .posts()
  },

  searchPosts: ({ term }) => {
    return photon.posts.findMany({
      where: {
        OR: [{ title: { contains: term } }, { body: { contains: term } }],
      },
    })
  },

  postsCount: ({ page }) => {
    return photon.posts.count().then((count) => ({ count }))
  },

  createPost: ({ input }) => {
    validate(input)
    return photon.posts.create({ data: input })
  },

  updatePost: ({ id, input }) => {
    validate(input)
    return photon.posts.update({ data: input, where: { id: parseInt(id) } })
  },

  hidePost: ({ id }) => {
    return photon.posts.update({
      data: { postedAt: null },
      where: { id: parseInt(id) },
    })
  },

  deletePost: ({ id }) => {
    return photon.posts.delete({
      where: { id: parseInt(id) },
    })
  },
}

export default Posts
