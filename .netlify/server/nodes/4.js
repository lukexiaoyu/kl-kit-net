import * as server from '../entries/pages/ps/add/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ps/add/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/ps/add/+page.server.js";
export const imports = ["_app/immutable/nodes/4.fkKvkeXg.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Ds-t-2tK.js"];
export const stylesheets = [];
export const fonts = [];
