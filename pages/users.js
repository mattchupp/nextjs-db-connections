import { FirebaseDb} from '../lib/firebase'
import Layout from '../components/layout'

function Users ({ data }) {
  return (
    <Layout>
      {data.map(({ first_name, last_name, username }) =>
        <div key={username}>
          <h2>{first_name} {last_name}</h2>
          <p>Username: {username}</p>
        </div>
      )}
    </Layout>
  )
}

// Users.getInitialProps = async function () {
//   const db = await FirebaseDb()
//   let data = []
//   const querySnapshot = await db.firestore().collection('users').get()
//   querySnapshot.forEach(doc => {
//     data.push(doc.data())
//   })
//
//   return {
//     data
//   }
// }

export async function getServerSideProps() {
  const db = await FirebaseDb()
  let data = []
  const queryDb = await db.firestore().collection('users').get()
  queryDb.forEach(user => {
    data.push(user.data())
  })
  return {
    props: {
      data
    }
  }
}

export default Users
