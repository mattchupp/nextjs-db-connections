// import firebase from '../../lib/firebase'
//
//
// export default async (req, res) => {
//   console.log(firebase.name)
//
//   firebase
//     .collection('users')
//     .doc(req.query.username)
//     .get()
//     .then((doc) => {
//       res.json(doc.data());
//     })
//     .catch((error) => {
//       res.json({ error });
//     });
// };
