Accounts.oauth.registerService('liberty-adfsoauth');

if (Meteor.isClient) {
  Meteor.loginWithLibertyAdfsoauth = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    LibertyAdfsoauth.requestCredential(options, credentialRequestCompleteCallback);
  };
}
