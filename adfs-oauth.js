Accounts.oauth.registerService('libertyadfsoauth');

if (Meteor.isClient) {
  Meteor.loginWithLibertyadfsoauth = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Adfsoauth.requestCredential(options, credentialRequestCompleteCallback);
  };
}
