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
  /*  route("c", "routes/layouts/chat_layout.tsx", [
    index("routes/c/list.tsx"), // List of chats pages, open by default on hitting localhost:port/c
    route(":c", "routes/c/chat.tsx"), // Show one chat list.
  ]), */
  // Below is 2nnd method how you nest different routes.
  layout("routes/layouts/chat_layout.tsx", [
    ...prefix("c", [
      // prefix the accesser url with c/:c or c/list
      index("routes/c/list.tsx"),
      route(":c", "routes/c/chat.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
