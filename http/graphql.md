# GraphQL Stuff

## Queries

```
query theSomebody($catId: ID!) {
  somebody {
    name
    pets {
      __typename
      name
    }
    friends {
      name
      pets {
        id
        __typename
        name
        age
      }
    }
    cat(id: $catId) {
      __typename
      id
      name
      age
    }
  }
}

query thePets {
  pets {
    __typename
    name
    ... on Dog {
        bones
  	}
  	... on Cat {
      mice
    }
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