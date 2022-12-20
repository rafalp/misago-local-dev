misago-local-dev
================

This repository contains local development environment for Misago.

This setup is based on git submodules. You need to run those commands to init them:

```console
git submodule init
git submodule update
```


# Building everything

To build everything, you can use `run init` bootstraping script:

```
./run init
```

By default the setup builds all containers:

- `misago`: GraphQL APIs and server-side fallback views for crawlers.
- `client`: React.js app that consumes public GraphQL API and renders forum UI.
- `admin`: React.js app that consumes admin GraphQL API andd renders aministrator UI.

The advantage of this approach is that the build includes plugin setup step for `client` and `admin`. But this runs Node.js in the docker, which can be VERY slow.

# Building API only

You can manually build the API only (skipping the potentially slow build step for `client` and `admin`). This will skip the plugins setup for those, but is still preferable when goal is to contribute to Misago itself instead of developing plugins.

To build Misago only, run following commands:

```
./run init misago
```

This will skip `client` and `admin` containers completely. If you want to still run those, you will have to run those manually on your host machine runing `npm install` and `npm start` commands in their directories like in any `create-react-app` projects.

Misago is initialized in "more setup needed" state, so you will need to also run the setup GraphQL query to create admin account and and do initial configuration.

To do that go to [http://127.0.0.1:8000/graphql/](http://127.0.0.1:8000/graphql/) in your browser while Misago's container is running, and then run following GraphQL query:

```graphql
mutation SetupSite($input: SiteSetupInput!) {
  siteSetup(
    input: {
      forumName: "Misago Test",
      forumIndexThreads: true,
      name: "admin",
      email: "admin@example.com",
      password: "password123"
    }
  ) {
    errors {
      location
      message
      type
    }
  }
}
```

If errors list is empty, your Misago instance has been configured and administrator account has been created for it.