import { db } from 'src/lib/db'

export const tags = () => db.tag.findMany()

export const tag = ({ name }) => db.tag.findOne({ where: { name } })

export const Tag = {
  posts: (_obj, { root }) => db.tag.findOne({ where: { id: root.id } }).posts(),
}
