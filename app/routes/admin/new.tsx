import { Form } from 'remix';

const NewPost = () => {
  return (
    <div>
      <h2>New Post</h2>
      <Form method='post'>
      <p>
        <label>Post Title: <input type='text' name='title' /></label>
      </p>
      <p>
        <label>Post Slug: <input type='text' name='slug' /></label>
      </p>
      <p>
        <label htmlFor='markdown'>Markdown:</label>
        <br />
        <textarea id='markdown' name='markdown' rows={20} style={{ width: '100%' }} />
      </p>
      <p>
        <button type='submit'>CREATE</button>
      </p>
      </Form>
    </div>
  );
};

export default NewPost;
