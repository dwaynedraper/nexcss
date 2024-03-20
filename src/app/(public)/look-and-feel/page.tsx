import React from "react";

// Look and feel is a page that is only used for testing. Its purpose is to put one of each of the most common HTML elements on the page. The global styles from /src/app/globals.scss are applied to this page. It allows a user to quickly come up with good default values for most of the necessary core elements. It should include headings, paragraphs, lists, links, buttons, forms, and form input elements.

// TODO: Restructure this page a little more thoughtfully, with layouts that are more realistic.

export default function LookAndFeel() {
  return (
    <div className="lookAndFeel">
      <section>
        <h1>Look and Feel</h1>
        <h3>This page is only used for testing.</h3>
      </section>
      <section>
        <h2 className="text-blue-800">Headings</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </section>
      <section>
        <h2 className="text-blue-800">Paragraphs</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
          lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam
          viverra nec consectetur ante hendrerit. Donec et mollis dolor.
          Praesent et diam eget libero egestas mattis sit amet vitae augue . Nam
          tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut
          libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis
          felis, pulvinar a semper sed, adipiscing id dolor.
        </p>
      </section>
      <section>
        <h2 className="text-blue-800">Lists</h2>
        <ul>
          <li>
            List Item 1 - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Repellendus distinctio veniam nemo nihil! Sapiente molestiae,
            nihil sit voluptatibus, doloribus hic incidunt tempora dicta odio
            saepe repudiandae, illum atque magni placeat.
          </li>
          <li>
            List Item 2 -Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam qui impedit debitis, a dolorem ex iusto atque consequatur
            beatae, animi repellat placeat rem perferendis temporibus, sapiente
            blanditiis harum dolore minima!
          </li>
          <li>
            List Item 3 - Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Neque ea aliquam rerum libero iste eos quidem maiores numquam
            incidunt laboriosam consectetur reprehenderit culpa quo fugiat, ex
            quaerat, deserunt corporis quas!
          </li>
        </ul>
        <ol>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ol>
      </section>
      <section>
        <h2 className="text-blue-800">Links</h2>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </section>
      <section>
        <h2 className="text-blue-800">Buttons</h2>
        <div>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
      </section>
      <section>
        <h2 className="text-blue-800">Forms</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}
