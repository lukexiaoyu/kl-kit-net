import * as universal from '../entries/pages/one/_id_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/one/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/one/[id]/+page.js";
export const imports = ["_app/immutable/nodes/3.DtSxvHW2.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Ds-t-2tK.js"];
export const stylesheets = [];
export const fonts = [];
