const PocketShareIcon: string =
  'data:image/png;base64,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';

export default PocketShareIcon;
