import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Values } from "redux-form-website-template";
import { createPost } from "../actions/index";
import { browserHistory } from "react-router";
import { Link } from "react-router";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const tooOld = value =>
  value && value > 65 ? "You might be too old for this" : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        className="form-control"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class NewPosts extends Component {

  submit(values, dispatch) {
    return dispatch(createPost(values)).then(() => browserHistory.push("/"));
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <Link  to="/" className="fa fa-trash">Back</Link>
        <form onSubmit={handleSubmit(this.submit)}>
          <div className="form-group">
            <label>Title</label>
            <Field name="title" component={renderField} validate={[required]} />
          </div>
          <div className="form-group">
            <label>Category</label>
            <Field
              name="categories"
              component={renderField}
              validate={[required]}
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <Field
              name="content"
              component={renderField}
              validate={[required]}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={submitting}>
          Submit
        </button>
        <button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        </form>

        <Values form="NewPostForm" />
      </div>
    );
  }
}

export default reduxForm({ form: "NewPostForm" })(NewPosts);
//behind the scence redux form use the information in NewPostForm to record the inputs the user adds on these different keys in the state object:
//state==={
// form:
// NewPostForm:{
//   {title:'....',
// categories:'...',
// content:"...."}
//  }
//}
