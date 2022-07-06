# GraphQL Stuff

## Queries

```
# Write your query or mutation here
query thePets {
  pets {
    __typename
    id
    name
  }
}

query theCats($catId: ID!) {
  cat(id: $catId) {
    __typename
    id
    name
  }
  cats {
    id
    name
    age
  }
}

query theDogs($dogId: ID!) {
  dog(id: $dogId) {
    __typename
    id
    name
  }
  dogs {
    id
    name
    age
  }
}

```

## Variables

```
{
  "catId": "5",
  "dogId": "7"
}
```