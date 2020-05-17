import { FirebaseDb} from '../lib/firebase'
import Layout from '../components/layout'

function Posts ({ data }) {
  return (
    <Layout>
      {data.map(({ id, post_title, post_content, sub }) =>
        <div key={id}>
          <h2>{post_title}</h2>
          <p>Sub: {sub}</p>
          <p>{post_content}</p>
        </div>
      )}
    </Layout>
  )
}


// Get data
export async function getServerSideProps() {
  const db = await FirebaseDb()
  let data = []
  const queryDb = await db.firestore().collection('posts').get()
  queryDb.forEach(post => {
    data.push(post.data())
  })
  return {
    props: {
      data
    }
  }
}

export default Posts
