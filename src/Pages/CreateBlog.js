import React from "react";

function CreateBlog() {
    return (
        <div>
            <div className="container-fluid create-post">
            <h1>Create post</h1>
            <form action="/compose" method="POST">
                <div class="form-group">
                    <label for="inputData">Title</label>
                    <input type="text" name="inputTitle" id="inputData" class="form-control" />
                </div>

                <div class="form-group">
                        <label for="publish">Post</label>
                        <textarea name="inputBody" id="" publish class="form-control" rows="5"></textarea>
                </div>

                <button type="submit" class="btn btn-primary" id="publish">Publish</button>
            </form>
            </div>
      </div>
    )
  }

export default CreateBlog;