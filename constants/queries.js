// CREATE USER QUERY
`
mutation CreateUser {
  createUser(data: { name: "Richard Haines", location: "Domsjö" }) {
    name
    location
    _id
  }
}
` // CREATE ACCOUNT QUERY
`
mutation CreateAccount {
  createAccount(
    data: {
      email: "hello@richardhaines.dev"
      user: { connect: "265622630745244162" } // Richard Haines returned _id
    }
  ) {
    _id
    email
    user {
      name
      location
    }
  }
}

// FIND USER BY ID  - used once user has logged in or registered

query FindUserById {
  findUserByID(id: "265707293931209217") {
    name
    location
    phone
  }
}

// GET ALL LOCATIONS

query GetAllLocations {
  allLocations {
    data {
      _id
      location
    }
  }
}

// FIND USER BY ID

query {
  findUserByID(id: "265883954199921161") {
    name
    location {
      location
    }
  }
}

`;

// `
// query {
//     allUsers {
//       data {
//         name
//         location
//         _id
//       }
//     }
//   }
// ``
// query {
//   allItems {
//     data {
//       name
//       location
//       description
//       swapped
//       date
//       contactByPhone
//       contactByEmail
//       owner {
//         name
//         email
//         phone
//       }
//     }
//   }
// }
// ``
// mutation {
//     createUser(
//       data: {
//         name: "Richard Haines"
//         location: "Örnsköldsvik"
//         contact: { create: { email: "hello@richardhaines.dev" } }
//       }
//     ) {
//       _id
//       name
//       location
//       contact {
//         email
//       }
//     }
//   }
// ``
// mutation {
//     createItem(
//       data: {
//         name: "PS4"
//         location: "Domsjö"
//         description: "A PS4 Pro that works as it should"
//         date: "2020-05-10"
//         photo: "path-to-image"
//         swapped: false
//         owner: { connect: "265154826419044866" }
//       }
//     ) {
//       name
//       location
//       description
//       date
//       photo
//       swapped
//       owner {
//         name
//       }
//     }
//   }
// `;
