import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  // Below is the first method how you nest different routes.
  /*  route("c", "layouts/chat_layout.tsx", [
    index("routes/c/new-chat.tsx"), // Start the chat page, open by default on hitting localhost:port/c
    route(":c", "routes/c/chat.tsx"), // Show one chat list.
  ]), */
  // Below is 2nnd method how you nest different routes.
  //   layout("layouts/chat_layout.tsx", [
  //     ...prefix("c", [
  //       // prefix the accesser url with c/:c or c/list
  //       index("routes/c/new-chat.tsx"), // Start the chat page, open by default on hitting localhost:port/c
  //       route(":c", "routes/c/chat.tsx"),
  //     ]),
  //   ]),
  // here is the common router for AI Chat like chat gpt have
  layout("routes/_layout.tsx", [
    index("routes/c/new-chat.tsx"),
    ...prefix("c", [
      layout("routes/c/_layout.tsx", [
        index("routes/c/index.tsx"),
        route(":c", "routes/c/chat.tsx"),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
