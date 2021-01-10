# Github Folio

<p align="center">
  <img src="https://i.ibb.co/ygcMg4f/github-folio-pres-copie.png" alt="Github Folio example" />
</p>

<h3 align="center">
  An elegant interface to present your public Github projects<br>and your experiences as a developer.
</h3>

<br>

## Technology stack

<p align="center">
  <img src="https://i.ibb.co/3YK4932/used-technologies-ghsneakpeek-updated-copie.png" alt="Technologies used in project" />
</p>

<p display="flex" align="center">
  <a margin="15px" href="https://nextjs.org/">&nbsp;Next.js&nbsp;</a>
  <a margin="15px" href="https://www.typescriptlang.org/">&nbsp;Typescript&nbsp;</a>
  <a margin="15px" href="https://graphql.org/">&nbsp;GraphQL&nbsp;</a>
  <a margin="15px" href="https://www.apollographql.com/">&nbsp;Apollo&nbsp;</a>
  <a margin="15px" href="https://tailwindcss.com/">&nbsp;Tailwind&nbsp;</a>
  <a margin="15px" href="https://www.framer.com/motion/">&nbsp;Framer Motion&nbsp;</a>
</p>

## Github Personal Access Token

To setup the project properly you need a Github Access Token to be able to use the GraphQL API and retrieve your data.

When you have the access token, you have to set in your `.env` file at the root folder of the application like this:
`GITHUB_ACCESS_TOKEN=xxxxxxxxxx`

Be sure to replace the blank value with your personal access token.

### How to get a personal access Token ?

1. Login into your Github account
2. Click on your **profile picture** at the top right corner of screen
3. Click on **settings** in the dropdown menu
4. Go to **Developer settings**
5. Go to **Personnal Access Tokens** and **Generate a new token**

## Prettier

A `.prettierc.json` is present to format `components`, `pages` and `utils`.

You can format the files by using `npm run p-format` and check if the files are respecting the rules by using `npm run p-check`.

## Codegen (for GraphQL Types)

In the `/graphql` folder you'll find a `/types` folder that is referencing the types of all data that can be retrieved with the queries or mutations.

If you want to add queries, mutations or updated the existing one, you'll need to update the types files by running `npm run codegen:generate`.

To generate the types you'll need the GraphQL schema of the Github API that can be downloaded by running `npm run codegen:schema` that is already present in the repository, run the command to get the updated version of the API.

Check [Apollo Tooling](https://github.com/apollographql/apollo-tooling) for more informations.

## Development

Install dependencies and run the application locally using Next.js.

```
npm install
npm run dev
```

## Production

The application integrate a Docker to easily run a instance of the project.

```
docker build -t github-folio .
docker run -p 3000:3000 github-folio
```

## Roadmap

- Move the pagination system of projects from `updateQuery` to `InMemoryCache`
- Add more options and styles for the `/curriculum` page
- Implement unit tests
