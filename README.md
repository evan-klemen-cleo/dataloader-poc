```graphql
query GetPosts {
  posts {
    id
    title
    body
    createdBy {
      id
      name
    }
  }
}
```
