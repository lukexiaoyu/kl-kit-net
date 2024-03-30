import * as server from '../entries/pages/ps/_id_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ps/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/ps/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.BEq7z_IK.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Ds-t-2tK.js"];
export const stylesheets = [];
export const fonts = [];
