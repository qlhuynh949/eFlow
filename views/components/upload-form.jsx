const React = require('react');

const UploadForm = props => {
  return (
    <form>
      <div class="js-upload" uk-form-custom>
        <input class='uk-button uk-button-default' type="file" value='upload' id='filebutton' multiple />
      </div>
      <input type="hidden" id="uid" name="uid" value={props.userid} />
      <input type="hidden" id="form-upload-id" name="form-upload-id" />
      <div id='uploadDisplay'></div>
      <progress id="js-progressbar" class="uk-progress" value="0" max="100" hidden ></progress>
    </form>
  );
}


module.exports = UploadForm;

