import { FirebaseDb} from '../lib/firebase'
import Layout from '../components/layout'

function Subs ({ data }) {
  return (
    <Layout>
      {data.map(({ id, sub_title, sub_description }) =>
        <div key={id}>
          <h2>{sub_title}</h2>
          <p>{sub_description}</p>
        </div>
      )}
    </Layout>
  )
}


// Get data
export async function getServerSideProps() {
  const db = await FirebaseDb()
  let data = []
  const queryDb = await db.firestore().collection('subs').get()
  queryDb.forEach(user => {
    data.push(user.data())
  })
  return {
    props: {
      data
    }
  }
}

export default Subs
