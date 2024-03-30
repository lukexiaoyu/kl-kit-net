import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto grid" data-svelte-h="svelte-120hz8e"><form action="?/add_name" method="post"><label for="">name:</label><input type="text" name="name"> <label for="">age:</label><input type="number" name="age"> <label for="">sex:</label><input type="text" name="sex"> <button class="btn" type="submit">submit</button></form></div> <div class="p-2 rounded-md shadow-md shadow-gray-300 container mx-auto" data-svelte-h="svelte-19kfr7f">hello</div>`;
});
export {
  Page as default
};
