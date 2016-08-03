/**
 * Users can only create/update their own top score
 */
TopScore.allow({
  insert: function (userId, doc) {
    return (userId && doc.user === userId);
  },

  update: function (userId, doc, fields, modifier) {
    return (userId && doc.user === userId);
  }
});