import "./accordion.css";
import ShowContent from "./ShowContent";

export default function Accordion() {
  const items = [
    {
      title: "Html",
      description:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "Css",
      description:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      title: "Js",
      description:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <ShowContent
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
