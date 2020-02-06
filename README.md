# react-a11y-inspector

This is a proof of concept React app which uses an experimental feature of
Chrome to render the accessibility tree (or Accessibility Object Model, AOM) of
a React component tree.

It partially works, except when it doesn't. The biggest flaw right now is that
the API for getting accessibility information does not return `aria-hidden` in
any way, making it difficult to reason about what is available or hidden to
assisstive technologies.
