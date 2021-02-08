const userByIdResult = {
  data: {
    userById: {
      id: 123,
      username: 'joseph'
    }
  }
}

const userByUsernameResult = {
  data: {
    userByUsername: {
      id: 123,
      username: 'joseph'
    }
  }
}

// type GraphQLResponse<QueryKey, ResponseType> = {
//   data: {
//     [QueryKey]: ResponseType
//   }
// }

// interface User {
//   id: string
//   username: string
// }

// type UserByIdResponse = GraphQLResponse<'userById', User>
// type UserByUsernameResponse = GraphQLResponse<'userByUsername', User>


// 解答
type GraphQLResponse2<QueryKey, ResponseType> = {
  data: {
    [QueryKey: string]: ResponseType
  }
}

interface User {
  id: string
  username: string
}

type UserByIdResponse2 = GraphQLResponse2<'userById', User>
type UserByUsernameResponse2 = GraphQLResponse2<'userByUsername', User>

// 答え
type GraphQLResponse3<QueryKey extends string, ResponseType> = {
  data: {
    [K in QueryKey]: ResponseType
  }
}

type UserByIdResponse3 = GraphQLResponse3<'userById', User>
// type UserByIdResponse3 = {
//   data: {
//       userById: User;
//   };
// }
type UserByUsernameResponse3 = GraphQLResponse3<'userByUsername', User>