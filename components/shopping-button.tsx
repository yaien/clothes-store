import Link from "next/link";

export interface ShoppingButtonProps
  extends React.HTMLProps<HTMLButtonElement> {
  items: number;
}

const ShoppingButton = (props: ShoppingButtonProps) => (
  <>
    <Link href="/cart">
      <button onClick={props.onClick}>
        <i className="material-icons-outlined">shopping_bag</i>
        {props.items ? <div className="badge">{props.items}</div> : null}
      </button>
    </Link>
    <style jsx>
      {`
        button {
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.5s ease;
          outline: none;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          position: inline-block;
        }

        button:hover {
          color: #aaa;
        }

        .badge {
          background-color: #bd1e1e;
          padding: 0.2em 0.5em;
          border-radius: 1em;
          color: white;
          font-weight: bold;
          font-size: 0.8rem;
          text-align: center;
          vertical-align: center;
          position: absolute;
          transition: all 0.5s ease;
          font-size: 0.8em;
          font-weight: bold;
          top: 22px;
          right: 3px;
        }
        button i {
          font-size: 26px;
        }

        button:hover .badge {
          background-color: #ff9191;
        }
      `}
    </style>
  </>
);

export default ShoppingButton;
