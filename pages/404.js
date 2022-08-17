import Link from "next/link";
import Meta from "../components/Meta";

const PageNotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Meta title="Error page"></Meta>
      <div className="error-div">
        <h1>This page is not found</h1>

        <Link href="/">
          <button className="back-btn">Back to home</button>
        </Link>
      </div>

      <style jsx>
        {`
          .error-div {
            text-align: center;
          }
          .back-btn {
            border: 0;
            border-radius: 7px;
            background-color: blue;
            color: white;
            text-weight: bold;
            padding: 8px 12px;
          }
        `}
      </style>
    </div>
  );
};

export default PageNotFound;
