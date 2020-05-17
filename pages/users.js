import { FirebaseDb} from '../lib/firebase'

function Users ({ data }) {
  return (
    <>
      <ul>
        {data.map(({ first_name, last_name, username }) =>
          <li key={username}>{username}</li>
        )}
      </ul>
    </>
  )
}

Users.getInitialProps = async function () {
  const db = await FirebaseDb()
  let data = []
  const querySnapshot = await db.firestore().collection('users').get()
  querySnapshot.forEach(doc => {
    data.push(doc.data())
  })

  return {
    data
  }
}

export default Users
