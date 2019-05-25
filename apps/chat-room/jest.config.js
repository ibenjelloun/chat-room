module.exports = {
  name: "chat-room",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/chat-room/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
