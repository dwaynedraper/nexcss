import React from "react";

const LookAndFeelPage = () => {
  return (
    <section>
      <h1 className="text-9xl font-gray-800">Look and Feel</h1>

      <h2>Headings</h2>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <h2>Paragraphs</h2>
      <p>
        This is a paragraph with some <strong>bold text</strong> and some{" "}
        <em>italic text</em>. It also includes a <a href="#">link</a>.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        nibh sit amet mauris tincidunt, a facilisis magna luctus.
      </p>

      <h2>Lists</h2>
      <h3>Unordered List</h3>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>

      <h3>Ordered List</h3>
      <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ol>

      <h2>Forms</h2>
      <form className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>

      <h2>Tables</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>32</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Los Angeles</td>
          </tr>
        </tbody>
      </table>

      <h2>Images</h2>
      <img src="/placeholder.jpg" alt="Placeholder Image" />

      <h2>Code Blocks</h2>
      <pre>
        <code>
          function greet(name) {`{`}
          console.log(&apos;Hello, &apos; + name + &apos;!&apos;);
          {`}`}
        </code>
      </pre>
    </section>
  );
};

export default LookAndFeelPage;
