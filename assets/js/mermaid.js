import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11.12.0/dist/mermaid.esm.min.mjs";

mermaid.initialize({ startOnLoad: false });

const codeBlocks = document.querySelectorAll("pre > code.language-mermaid");
const diagrams = [];

for (const codeBlock of codeBlocks) {
  const pre = codeBlock.parentElement;
  if (!pre) {
    continue;
  }

  const diagram = document.createElement("div");
  diagram.className = "mermaid";
  diagram.textContent = codeBlock.textContent ?? "";
  pre.replaceWith(diagram);
  diagrams.push(diagram);
}

if (diagrams.length > 0) {
  await mermaid.run({ nodes: diagrams });
}
