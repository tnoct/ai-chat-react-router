import { Outlet } from "react-router";

type Props = {};

const _layout = (props: Props) => {
  return (
    <div>
      This is the main layout.
      <Outlet />
    </div>
  );
};

export default _layout;
