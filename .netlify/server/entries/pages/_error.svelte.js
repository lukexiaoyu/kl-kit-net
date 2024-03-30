import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "h1.svelte-m42x0k{background-color:greenyellow}#big.svelte-m42x0k{height:100vh;background-color:rgba(172, 255, 47, 0.258)}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container mx-auto svelte-m42x0k" id="big" data-svelte-h="svelte-1gbr53s"><h1 class=" svelte-m42x0k">page is not fount</h1> <div class="text-center"><a href="/" class="btn">back home!</a></div> </div>`;
});
export {
  Error as default
};
