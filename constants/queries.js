
`
query {
    allUsers {
      data {
        name
        location
        _id
      }
    }
  }
`

`
mutation {
    createUser(
      data: {
        name: "Richard Haines"
        location: "Örnsköldsvik"
        contact: { create: { email: "hello@richardhaines.dev" } }
      }
    ) {
      _id
      name
      location
      contact {
        email
      }
    }
  }
`

`
mutation {
    createMessage(
      data: {
        to: "emeliehaines@hotmail.com"
        from: "hello@richardhaines.dev"
        message: "I would like to sawp something please"
        owner: { connect: "265154826419044866" }
      }
    ) {
      _id
      message
      owner {
        data {
          name
          location
          contact {
            email
          }
        }
      }
    }
  }
`

`
mutation {
    createItem(
      data: {
        name: "PS4"
        location: "Domsjö"
        description: "A PS4 Pro that works as it should"
        date: "2020-05-10"
        photo: "path-to-image"
        swapped: false
        owner: { connect: "265154826419044866" }
      }
    ) {
      name
      location
      description
      date
      photo
      swapped
      owner {
        name
      }
    }
  }
`