import { FirebaseDb} from '../lib/firebase'

function Users ({ data }) {
  return (
    <>
      {data.map(({ first_name, last_name, username }) =>
        <div key={username}>
          <h2>{first_name} {last_name}</h2>
          <p>Username: {username}</p>
        </div>
      )}
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
