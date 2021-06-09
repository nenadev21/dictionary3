import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className="container">
      <main className="main"> {props.children}</main>
    </div>
  );
}

export default Layout;
