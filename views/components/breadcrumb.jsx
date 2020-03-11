const React = require('react')


const Breadcrumb = (props) => {
  if (props.item) {
    return (
      <div className="uk-margin-top uk-margin-left ef-bc-margin">
        <ul class="uk-breadcrumb">
          <li><a href={"/collections/" + props.item.category}>{props.item.category}</a></li>
          <li><a href={"/products/" + props.item.id} className="uk-text-break">{props.item.name}</a></li>
        </ul>
      </div>
    )
  }
  else {
    return (
      <div className="uk-margin-top uk-margin-left ef-bc-margin" >
        <ul class="uk-breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href={"/collections/" + props.cat} >{props.cat}</a></li>
        </ul>
      </div >
    )
  }
}

module.exports = Breadcrumb
