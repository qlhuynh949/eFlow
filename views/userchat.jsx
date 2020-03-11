const React = require('react')
const Chat = require('./layouts/chat.jsx')

const UserChat = props => {
  return (
    <Chat>
      <div className="uk-container uk-margin-top">
        <div className="uk-column-1-8">
          <h3 className="uk-card-title uk-heading-small uk-heading-bullet">Conversations</h3>
          <div className="uk-card">
            <div className="ef-shadow ef-border-radius-top uk-card uk-card-default uk-card-body uk-height-small uk-overflow-auto">
                <ul class="uk-list uk-list-striped" id="conversations">
                </ul>
              </div>
              <div className="uk-card uk-card-default uk-card-body uk-overflow-auto uk-height-large ef-shadow" id="chatStream">
                <div className="uk-alert ef-border-radius uk-text-muted">
                  <h4>No chat is loaded</h4>
                </div>
                <hr class="uk-divider-icon" />
              </div>
              <div>
              <div className="ef-border-radius-bottom uk-card uk-card-primary uk-card-body ef-shadow uk-remove-padding-top">
                <div className="uk-margin" uk-margin>
                  <textarea className="uk-textarea uk-form-width-1-1 ef-border-radius" id="chatInput" type="text" placeholder="Enter a message..." rows="4"></textarea>
                  <button className="uk-button uk-button-default uk-margin-small-top" id="chatSend" style={{ float: "right" }}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Chat>
  )
}

module.exports = UserChat
